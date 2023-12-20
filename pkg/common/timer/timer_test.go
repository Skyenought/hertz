/*
 * Copyright 2022 CloudWeGo Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * The MIT License (MIT)
 *
 * Copyright (c) 2015-present Aliaksandr Valialkin, VertaMedia, Kirill Danshin, Erik Dubbelboer, FastHTTP Authors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 *
 * This file may have been modified by CloudWeGo authors. All CloudWeGo
 * Modifications are Copyright 2022 CloudWeGo Authors.
 */

package timer

import (
	"testing"
	"time"
)

// test initTimer function
func TestTimerInitTimer(t *testing.T) {
	// test nil Timer
	var nilTimer *time.Timer
	resNilTime := initTimer(nilTimer, 2*time.Second)
	if resNilTime == nil {
		t.Fatalf("Unexpected a nil. Expecting a Timer.")
	}

	// test the panic
	panicTimer := time.NewTimer(1 * time.Second)
	resPanicTimer := wrapInitTimer(panicTimer, 2*time.Second)
	if resPanicTimer != -1 {
		t.Fatalf("Expecting a panic for Timer, but nil")
	}
	// sleep enough time to test next timer
	time.Sleep(3 * time.Second)
}

func wrapInitTimer(t *time.Timer, timeout time.Duration) (ret int) {
	defer func() {
		if err := recover(); err != nil {
			ret = -1
		}
	}()
	res := initTimer(t, timeout)
	if res != nil {
		ret = 1
	}
	return ret
}

func TestTimerStopTimer(t *testing.T) {
	normalTimer := time.NewTimer(3 * time.Second)
	stopTimer(normalTimer)
	if normalTimer.Stop() {
		t.Fatalf("Expecting timer stopped, but it doesn't")
	}
}

func TestTimerAcquireTimer(t *testing.T) {
	normalTimer := AcquireTimer(2 * time.Second)
	if normalTimer == nil {
		t.Fatalf("Unexpected nil, expecting a timer")
	}
	ReleaseTimer(normalTimer)
}

func TestTimerReleaseTimer(t *testing.T) {
	normalTimer := AcquireTimer(2 * time.Second)
	ReleaseTimer(normalTimer)
	if normalTimer.Stop() {
		t.Fatalf("Expecting the timer is released.")
	}
}

func BenchmarkAcquireTimer(b *testing.B) {
	// run the AcquireTimer function b.N times
	b.ResetTimer()
	b.ReportAllocs()
	for n := 0; n < b.N; n++ {
		t := AcquireTimer(time.Second)
		ReleaseTimer(t) // release the timer after acquiring it
	}
}

func BenchmarkReleaseTimer(b *testing.B) {
	// create a slice of timers to be released
	timers := make([]*time.Timer, b.N)
	for i := 0; i < b.N; i++ {
		timers[i] = AcquireTimer(time.Second)
	}

	// run the ReleaseTimer function b.N times
	b.ResetTimer() // reset the timer to exclude the time spent on acquiring timers
	b.ReportAllocs()
	for n := 0; n < b.N; n++ {
		ReleaseTimer(timers[n])
	}
}
