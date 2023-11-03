window.BENCHMARK_DATA = {
  "lastUpdate": 1699012571744,
  "repoUrl": "https://github.com/Skyenought/hertz",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "skyenought@qq.com",
            "name": "Skyenought",
            "username": "Skyenought"
          },
          "committer": {
            "email": "skyenought@qq.com",
            "name": "Skyenought",
            "username": "Skyenought"
          },
          "distinct": true,
          "id": "1afe55230f5b9f3dee2a46728099700d13efba1c",
          "message": "fix panic in benchmark",
          "timestamp": "2023-11-03T19:49:37+08:00",
          "tree_id": "a19a3c85801a45649c292fcabfb42ad8def8904d",
          "url": "https://github.com/Skyenought/hertz/commit/1afe55230f5b9f3dee2a46728099700d13efba1c"
        },
        "date": 1699012288538,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Binding",
            "value": 398.8,
            "unit": "ns/op\t      80 B/op\t       4 allocs/op",
            "extra": "3002145 times\n2 procs"
          },
          {
            "name": "BenchmarkFuncOverhead",
            "value": 593.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1876184 times\n2 procs"
          },
          {
            "name": "BenchmarkFuncPure",
            "value": 24.19,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "100000000 times\n2 procs"
          },
          {
            "name": "BenchmarkHTTPHeaderGet",
            "value": 100.6,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "11908488 times\n2 procs"
          },
          {
            "name": "BenchmarkHertzHeaderGet",
            "value": 32.32,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "36744462 times\n2 procs"
          },
          {
            "name": "BenchmarkHTTPHeaderSet",
            "value": 155,
            "unit": "ns/op\t      32 B/op\t       2 allocs/op",
            "extra": "7671745 times\n2 procs"
          },
          {
            "name": "BenchmarkHertzHeaderSet",
            "value": 40.53,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "29831572 times\n2 procs"
          },
          {
            "name": "BenchmarkHTTPHeaderAdd",
            "value": 733.8,
            "unit": "ns/op\t     203 B/op\t       4 allocs/op",
            "extra": "1366492 times\n2 procs"
          },
          {
            "name": "BenchmarkHertzHeaderAdd",
            "value": 822.7,
            "unit": "ns/op\t     398 B/op\t       3 allocs/op",
            "extra": "1787494 times\n2 procs"
          },
          {
            "name": "BenchmarkRefreshServerDate",
            "value": 358,
            "unit": "ns/op\t      56 B/op\t       2 allocs/op",
            "extra": "3337170 times\n2 procs"
          },
          {
            "name": "BenchmarkURIParsePath",
            "value": 95.52,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "12621985 times\n2 procs"
          },
          {
            "name": "BenchmarkURIParsePathQueryString",
            "value": 77.77,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "15569148 times\n2 procs"
          },
          {
            "name": "BenchmarkURIParsePathQueryStringHash",
            "value": 86.27,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "13903201 times\n2 procs"
          },
          {
            "name": "BenchmarkURIParseHostname",
            "value": 106.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "11264590 times\n2 procs"
          },
          {
            "name": "BenchmarkURIFullURI",
            "value": 22.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "53048521 times\n2 procs"
          },
          {
            "name": "BenchmarkTree_FindStatic",
            "value": 9098,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "131824 times\n2 procs"
          },
          {
            "name": "BenchmarkTree_FindGithub",
            "value": 13108,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "92073 times\n2 procs"
          },
          {
            "name": "BenchmarkTree_FindStaticTsr",
            "value": 13.28,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "90373184 times\n2 procs"
          },
          {
            "name": "BenchmarkTree_FindParam",
            "value": 52.76,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "22693705 times\n2 procs"
          },
          {
            "name": "BenchmarkTree_FindParamTsr",
            "value": 66.94,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "17897954 times\n2 procs"
          },
          {
            "name": "BenchmarkTree_FindAny",
            "value": 47.12,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "24820124 times\n2 procs"
          },
          {
            "name": "BenchmarkTree_FindAnyFallback",
            "value": 65.94,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "17991175 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "skyenought@qq.com",
            "name": "Jiun Lee",
            "username": "Skyenought"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b0bb4920301c90d3a56bb720f35a190358e3374b",
          "message": "Merge pull request #1 from Skyenought/benchmark\n\nBenchmark",
          "timestamp": "2023-11-03T19:54:48+08:00",
          "tree_id": "a19a3c85801a45649c292fcabfb42ad8def8904d",
          "url": "https://github.com/Skyenought/hertz/commit/b0bb4920301c90d3a56bb720f35a190358e3374b"
        },
        "date": 1699012570837,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Binding",
            "value": 320.5,
            "unit": "ns/op\t      80 B/op\t       4 allocs/op",
            "extra": "3361939 times\n4 procs"
          },
          {
            "name": "BenchmarkFuncOverhead",
            "value": 352.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3459040 times\n4 procs"
          },
          {
            "name": "BenchmarkFuncPure",
            "value": 17.99,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "66804186 times\n4 procs"
          },
          {
            "name": "BenchmarkHTTPHeaderGet",
            "value": 76.47,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "14980593 times\n4 procs"
          },
          {
            "name": "BenchmarkHertzHeaderGet",
            "value": 27.22,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "43767174 times\n4 procs"
          },
          {
            "name": "BenchmarkHTTPHeaderSet",
            "value": 141.7,
            "unit": "ns/op\t      32 B/op\t       2 allocs/op",
            "extra": "7892379 times\n4 procs"
          },
          {
            "name": "BenchmarkHertzHeaderSet",
            "value": 33.24,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "33481653 times\n4 procs"
          },
          {
            "name": "BenchmarkHTTPHeaderAdd",
            "value": 770.3,
            "unit": "ns/op\t     252 B/op\t       4 allocs/op",
            "extra": "2036511 times\n4 procs"
          },
          {
            "name": "BenchmarkHertzHeaderAdd",
            "value": 314.3,
            "unit": "ns/op\t     355 B/op\t       3 allocs/op",
            "extra": "4003742 times\n4 procs"
          },
          {
            "name": "BenchmarkRefreshServerDate",
            "value": 277.8,
            "unit": "ns/op\t      56 B/op\t       2 allocs/op",
            "extra": "3970652 times\n4 procs"
          },
          {
            "name": "BenchmarkURIParsePath",
            "value": 49.21,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "24634534 times\n4 procs"
          },
          {
            "name": "BenchmarkURIParsePathQueryString",
            "value": 55.06,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "21734028 times\n4 procs"
          },
          {
            "name": "BenchmarkURIParsePathQueryStringHash",
            "value": 62.13,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "19364907 times\n4 procs"
          },
          {
            "name": "BenchmarkURIParseHostname",
            "value": 83.17,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "15124999 times\n4 procs"
          },
          {
            "name": "BenchmarkURIFullURI",
            "value": 19.27,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "61791514 times\n4 procs"
          },
          {
            "name": "BenchmarkTree_FindStatic",
            "value": 7248,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "168187 times\n4 procs"
          },
          {
            "name": "BenchmarkTree_FindGithub",
            "value": 10816,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "112365 times\n4 procs"
          },
          {
            "name": "BenchmarkTree_FindStaticTsr",
            "value": 11.14,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "100000000 times\n4 procs"
          },
          {
            "name": "BenchmarkTree_FindParam",
            "value": 40.56,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "29934883 times\n4 procs"
          },
          {
            "name": "BenchmarkTree_FindParamTsr",
            "value": 54.04,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "22087780 times\n4 procs"
          },
          {
            "name": "BenchmarkTree_FindAny",
            "value": 38.99,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "30063351 times\n4 procs"
          },
          {
            "name": "BenchmarkTree_FindAnyFallback",
            "value": 50.95,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "23408064 times\n4 procs"
          }
        ]
      }
    ]
  }
}