package adaptor

import (
	"bytes"
	"io"
	"net/http"
	"testing"

	"github.com/cloudwego/hertz/pkg/common/config"
	"github.com/cloudwego/hertz/pkg/common/ut"
	"github.com/cloudwego/hertz/pkg/route"
	"github.com/stretchr/testify/assert"
)

func TestNewHertzHTTPHandler(t *testing.T) {
	opt := config.NewOptions([]config.Option{})
	engine := route.NewEngine(opt)
	expectedValue := "success"
	expectedKey := "Authorization"
	expectedJson := []byte("{\"hi\":\"version1\"}")
	expectedContentLength := len(expectedJson)
	expectedCode := 200
	nethttpH := func(w http.ResponseWriter, r *http.Request) {
		w.WriteHeader(200)
		w.Header().Set(expectedKey, expectedValue)
		w.Write(expectedJson)
	}
	nethttpH2 := func(w http.ResponseWriter, r *http.Request) {
		w.WriteHeader(200)
		body, _ := io.ReadAll(r.Body)
		r.Body.Close()
		w.Write(body)
	}
	engine.GET("/get", NewHertzHTTPHandlerFunc(nethttpH))
	engine.POST("/post", NewHertzHTTPHandlerFunc(nethttpH2))
	headers := []ut.Header{
		{Key: "Content-Type", Value: "application/json"},
	}
	w := ut.PerformRequest(engine, "GET", "/get", nil, headers...)
	res := w.Result()
	assert.Equal(t, expectedCode, res.StatusCode())
	assert.Equal(t, expectedJson, res.Body())
	assert.Equal(t, expectedValue, res.Header.Get(expectedKey))
	assert.Equal(t, expectedContentLength, res.Header.ContentLength())

	w2 := ut.PerformRequest(engine, "POST", "/post", &ut.Body{
		Body: bytes.NewBuffer(expectedJson),
		Len:  len(expectedJson),
	}, headers...)
	res2 := w2.Result()

	assert.Equal(t, expectedCode, res2.StatusCode())
	assert.Equal(t, expectedJson, res2.Body())
	assert.Equal(t, expectedContentLength, res2.Header.ContentLength())
}