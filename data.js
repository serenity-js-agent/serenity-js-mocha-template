window.__SERENITY_REPORT_DATA__ = {
  "schemaVersion": 1,
  "summary": {
    "title": "@serenity-js/serenity-js-mocha-template",
    "totalScenarios": 2,
    "outcomes": {
      "passed": 2,
      "failed": 0,
      "pending": 0,
      "skipped": 0,
      "compromised": 0,
      "error": 0
    },
    "duration": 8816,
    "startedAt": "2026-11-22T22:40:35.328Z",
    "finishedAt": "2026-11-22T22:40:44.144Z",
    "testRunner": "Mocha"
  },
  "scenarios": [
    {
      "name": "GET /v4/?expr supports calculating a single expression",
      "category": "Math-js API",
      "outcome": "SUCCESS",
      "duration": 3939,
      "startedAt": "2026-11-22T22:40:35.328Z",
      "source": {
        "path": "/__w/serenity-js-mocha-template/serenity-js-mocha-template/spec/math-js_api.spec.ts"
      },
      "tags": [
        {
          "type": "feature",
          "name": "Math-js API"
        },
        {
          "type": "module",
          "name": "serenity-js-mocha-template"
        }
      ],
      "activities": [
        {
          "name": "Apisitt sends a request to calculate 2 + 2",
          "outcome": "SUCCESS",
          "duration": 3913,
          "children": [],
          "type": "Interaction",
          "startedAt": "2026-11-22T22:40:35.340Z",
          "location": {
            "path": "/__w/serenity-js-mocha-template/serenity-js-mocha-template/spec/math-js_api.spec.ts",
            "line": 20,
            "column": 22
          },
          "artifacts": [
            {
              "path": "test-runs/1/serenity-js-mocha-template-1/artifact-get-http---api-mathjs-org-v4-expr-2-20-2b-202-4b34b27196.json",
              "type": "screenshot"
            }
          ],
          "restQuery": {
            "method": "GET",
            "url": "http://api.mathjs.org/v4?expr=2%20%2B%202",
            "requestHeaders": "Accept: application/json, text/plain, */*\nUser-Agent: axios/1.20.0\nAccept-Encoding: gzip, compress, deflate, br",
            "statusCode": 200,
            "responseHeaders": "access-control-allow-headers: Content-Type, X-Requested-With\naccess-control-allow-methods: GET, POST, OPTIONS\naccess-control-allow-origin: *\ncontent-length: 1\ncontent-type: text/html; charset=utf-8\ndate: Sun, 22 Nov 2026 22:40:35 GMT\netag: W/\"1-G2RTiSRzpGfQc3LUXrBavCAxZHo\"\nnel: {\"report_to\":\"heroku-nel\",\"response_headers\":[\"Via\"],\"max_age\":3600,\"success_fraction\":0.01,\"failure_fraction\":0.1}\nreport-to: {\"group\":\"heroku-nel\",\"endpoints\":[{\"url\":\"https://nel.heroku.com/reports?s=gQJp18J5wZzM4s9tJJqLQuEUI0ZTixdv0PISP8FPOyM%3D\\u0026sid=c46efe9b-d3d2-4a0c-8c76-bfafa16c5add\\u0026ts=1795387235\"}],\"max_age\":3600}\nreporting-endpoints: heroku-nel=\"https://nel.heroku.com/reports?s=gQJp18J5wZzM4s9tJJqLQuEUI0ZTixdv0PISP8FPOyM%3D&sid=c46efe9b-d3d2-4a0c-8c76-bfafa16c5add&ts=1795387235\"\nserver: Heroku\nvary: Accept-Encoding\nvia: 1.1 heroku-router\nx-powered-by: Express\nx-ratelimit-limit: 1000000\nx-ratelimit-remaining: 999930\nx-ratelimit-reset: 1795473016\nconnection: close",
            "responseBody": "4"
          }
        },
        {
          "name": "Apisitt ensures that the body of the last response does equal 4",
          "outcome": "SUCCESS",
          "duration": 1,
          "children": [],
          "type": "Interaction",
          "startedAt": "2026-11-22T22:40:39.253Z",
          "location": {
            "path": "/__w/serenity-js-mocha-template/serenity-js-mocha-template/spec/math-js_api.spec.ts",
            "line": 21,
            "column": 24
          }
        }
      ],
      "executionHistory": [
        {
          "outcome": "SUCCESS",
          "run": "1",
          "timestamp": "2026-11-22T22:40:35.328Z",
          "duration": 3939,
          "activities": [
            {
              "name": "Apisitt sends a request to calculate 2 + 2",
              "outcome": "SUCCESS",
              "duration": 3913,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-11-22T22:40:35.340Z",
              "location": {
                "path": "/__w/serenity-js-mocha-template/serenity-js-mocha-template/spec/math-js_api.spec.ts",
                "line": 20,
                "column": 22
              },
              "artifacts": [
                {
                  "path": "test-runs/1/serenity-js-mocha-template-1/artifact-get-http---api-mathjs-org-v4-expr-2-20-2b-202-4b34b27196.json",
                  "type": "screenshot"
                }
              ],
              "restQuery": {
                "method": "GET",
                "url": "http://api.mathjs.org/v4?expr=2%20%2B%202",
                "requestHeaders": "Accept: application/json, text/plain, */*\nUser-Agent: axios/1.20.0\nAccept-Encoding: gzip, compress, deflate, br",
                "statusCode": 200,
                "responseHeaders": "access-control-allow-headers: Content-Type, X-Requested-With\naccess-control-allow-methods: GET, POST, OPTIONS\naccess-control-allow-origin: *\ncontent-length: 1\ncontent-type: text/html; charset=utf-8\ndate: Sun, 22 Nov 2026 22:40:35 GMT\netag: W/\"1-G2RTiSRzpGfQc3LUXrBavCAxZHo\"\nnel: {\"report_to\":\"heroku-nel\",\"response_headers\":[\"Via\"],\"max_age\":3600,\"success_fraction\":0.01,\"failure_fraction\":0.1}\nreport-to: {\"group\":\"heroku-nel\",\"endpoints\":[{\"url\":\"https://nel.heroku.com/reports?s=gQJp18J5wZzM4s9tJJqLQuEUI0ZTixdv0PISP8FPOyM%3D\\u0026sid=c46efe9b-d3d2-4a0c-8c76-bfafa16c5add\\u0026ts=1795387235\"}],\"max_age\":3600}\nreporting-endpoints: heroku-nel=\"https://nel.heroku.com/reports?s=gQJp18J5wZzM4s9tJJqLQuEUI0ZTixdv0PISP8FPOyM%3D&sid=c46efe9b-d3d2-4a0c-8c76-bfafa16c5add&ts=1795387235\"\nserver: Heroku\nvary: Accept-Encoding\nvia: 1.1 heroku-router\nx-powered-by: Express\nx-ratelimit-limit: 1000000\nx-ratelimit-remaining: 999930\nx-ratelimit-reset: 1795473016\nconnection: close",
                "responseBody": "4"
              }
            },
            {
              "name": "Apisitt ensures that the body of the last response does equal 4",
              "outcome": "SUCCESS",
              "duration": 1,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-11-22T22:40:39.253Z",
              "location": {
                "path": "/__w/serenity-js-mocha-template/serenity-js-mocha-template/spec/math-js_api.spec.ts",
                "line": 21,
                "column": 24
              }
            }
          ]
        }
      ],
      "cast": [
        {
          "name": "Apisitt",
          "abilities": [
            {
              "name": "PerformActivities"
            },
            {
              "name": "AnswerQuestions"
            },
            {
              "name": "RaiseErrors"
            },
            {
              "name": "ScheduleWork",
              "details": "{\"scheduler\":{\"clock\":{\"timeAdjustment\":{\"milliseconds\":0}},\"interactionTimeout\":{\"milliseconds\":5000}}}"
            },
            {
              "name": "CallAnApi",
              "details": "{\"baseURL\":\"http://api.mathjs.org/v4/\",\"headers\":{\"common\":{\"Accept\":\"application/json, text/plain, */*\"}},\"timeout\":10000}"
            },
            {
              "name": "TakeNotes",
              "details": "{\"notepad\":{}}"
            }
          ]
        }
      ],
      "id": "/__w/serenity-js-mocha-template/serenity-js-mocha-template/spec/math-js_api.spec.ts:GET /v4/?expr supports calculating a single expression@serenity-js-mocha-template"
    },
    {
      "name": "POST /v4 supports calculating multiple expressions in one request",
      "category": "Math-js API",
      "outcome": "SUCCESS",
      "duration": 4874,
      "startedAt": "2026-11-22T22:40:39.270Z",
      "source": {
        "path": "/__w/serenity-js-mocha-template/serenity-js-mocha-template/spec/math-js_api.spec.ts"
      },
      "tags": [
        {
          "type": "feature",
          "name": "Math-js API"
        },
        {
          "type": "module",
          "name": "serenity-js-mocha-template"
        }
      ],
      "activities": [
        {
          "name": "Apisitt sends a request to calculate 2 + 2, 5 - 3",
          "outcome": "SUCCESS",
          "duration": 4858,
          "children": [],
          "type": "Interaction",
          "startedAt": "2026-11-22T22:40:39.273Z",
          "location": {
            "path": "/__w/serenity-js-mocha-template/serenity-js-mocha-template/spec/math-js_api.spec.ts",
            "line": 39,
            "column": 22
          },
          "artifacts": [
            {
              "path": "test-runs/1/serenity-js-mocha-template-1/artifact-post-http---api-mathjs-org-v4-9a03c9f543.json",
              "type": "screenshot"
            }
          ],
          "restQuery": {
            "method": "POST",
            "url": "http://api.mathjs.org/v4",
            "requestHeaders": "Accept: application/json, text/plain, */*\nContent-Type: application/json\nUser-Agent: axios/1.20.0\nContent-Length: 26\nAccept-Encoding: gzip, compress, deflate, br",
            "requestBody": "{\"expr\":[\"2 + 2\",\"5 - 3\"]}",
            "statusCode": 200,
            "responseHeaders": "access-control-allow-headers: Content-Type, X-Requested-With\naccess-control-allow-methods: GET, POST, OPTIONS\naccess-control-allow-origin: *\ncontent-length: 33\ncontent-type: application/json; charset=utf-8\ndate: Sun, 22 Nov 2026 22:40:39 GMT\netag: W/\"21-PDaWl99xbv/H4ay/y9fMm3Dv4GM\"\nnel: {\"report_to\":\"heroku-nel\",\"response_headers\":[\"Via\"],\"max_age\":3600,\"success_fraction\":0.01,\"failure_fraction\":0.1}\nreport-to: {\"group\":\"heroku-nel\",\"endpoints\":[{\"url\":\"https://nel.heroku.com/reports?s=rfmREw1V5%2BEEx60V7Vbj1wkrVP%2FFOVmwq5VudxWiqk0%3D\\u0026sid=c46efe9b-d3d2-4a0c-8c76-bfafa16c5add\\u0026ts=1795387239\"}],\"max_age\":3600}\nreporting-endpoints: heroku-nel=\"https://nel.heroku.com/reports?s=rfmREw1V5%2BEEx60V7Vbj1wkrVP%2FFOVmwq5VudxWiqk0%3D&sid=c46efe9b-d3d2-4a0c-8c76-bfafa16c5add&ts=1795387239\"\nserver: Heroku\nvary: Accept-Encoding\nvia: 1.1 heroku-router\nx-powered-by: Express\nx-ratelimit-limit: 1000000\nx-ratelimit-remaining: 999928\nx-ratelimit-reset: 1795473016\nconnection: close",
            "responseBody": "{\n    \"result\": [\n        \"4\",\n        \"2\"\n    ],\n    \"error\": null\n}"
          }
        },
        {
          "name": "Apisitt ensures that the body of the last response does equal { result: [ \"4\", \"2\" ], error: null }",
          "outcome": "SUCCESS",
          "duration": 1,
          "children": [],
          "type": "Interaction",
          "startedAt": "2026-11-22T22:40:44.131Z",
          "location": {
            "path": "/__w/serenity-js-mocha-template/serenity-js-mocha-template/spec/math-js_api.spec.ts",
            "line": 43,
            "column": 24
          }
        }
      ],
      "executionHistory": [
        {
          "outcome": "SUCCESS",
          "run": "1",
          "timestamp": "2026-11-22T22:40:35.328Z",
          "duration": 4874,
          "activities": [
            {
              "name": "Apisitt sends a request to calculate 2 + 2, 5 - 3",
              "outcome": "SUCCESS",
              "duration": 4858,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-11-22T22:40:39.273Z",
              "location": {
                "path": "/__w/serenity-js-mocha-template/serenity-js-mocha-template/spec/math-js_api.spec.ts",
                "line": 39,
                "column": 22
              },
              "artifacts": [
                {
                  "path": "test-runs/1/serenity-js-mocha-template-1/artifact-post-http---api-mathjs-org-v4-9a03c9f543.json",
                  "type": "screenshot"
                }
              ],
              "restQuery": {
                "method": "POST",
                "url": "http://api.mathjs.org/v4",
                "requestHeaders": "Accept: application/json, text/plain, */*\nContent-Type: application/json\nUser-Agent: axios/1.20.0\nContent-Length: 26\nAccept-Encoding: gzip, compress, deflate, br",
                "requestBody": "{\"expr\":[\"2 + 2\",\"5 - 3\"]}",
                "statusCode": 200,
                "responseHeaders": "access-control-allow-headers: Content-Type, X-Requested-With\naccess-control-allow-methods: GET, POST, OPTIONS\naccess-control-allow-origin: *\ncontent-length: 33\ncontent-type: application/json; charset=utf-8\ndate: Sun, 22 Nov 2026 22:40:39 GMT\netag: W/\"21-PDaWl99xbv/H4ay/y9fMm3Dv4GM\"\nnel: {\"report_to\":\"heroku-nel\",\"response_headers\":[\"Via\"],\"max_age\":3600,\"success_fraction\":0.01,\"failure_fraction\":0.1}\nreport-to: {\"group\":\"heroku-nel\",\"endpoints\":[{\"url\":\"https://nel.heroku.com/reports?s=rfmREw1V5%2BEEx60V7Vbj1wkrVP%2FFOVmwq5VudxWiqk0%3D\\u0026sid=c46efe9b-d3d2-4a0c-8c76-bfafa16c5add\\u0026ts=1795387239\"}],\"max_age\":3600}\nreporting-endpoints: heroku-nel=\"https://nel.heroku.com/reports?s=rfmREw1V5%2BEEx60V7Vbj1wkrVP%2FFOVmwq5VudxWiqk0%3D&sid=c46efe9b-d3d2-4a0c-8c76-bfafa16c5add&ts=1795387239\"\nserver: Heroku\nvary: Accept-Encoding\nvia: 1.1 heroku-router\nx-powered-by: Express\nx-ratelimit-limit: 1000000\nx-ratelimit-remaining: 999928\nx-ratelimit-reset: 1795473016\nconnection: close",
                "responseBody": "{\n    \"result\": [\n        \"4\",\n        \"2\"\n    ],\n    \"error\": null\n}"
              }
            },
            {
              "name": "Apisitt ensures that the body of the last response does equal { result: [ \"4\", \"2\" ], error: null }",
              "outcome": "SUCCESS",
              "duration": 1,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-11-22T22:40:44.131Z",
              "location": {
                "path": "/__w/serenity-js-mocha-template/serenity-js-mocha-template/spec/math-js_api.spec.ts",
                "line": 43,
                "column": 24
              }
            }
          ]
        }
      ],
      "cast": [
        {
          "name": "Apisitt",
          "abilities": [
            {
              "name": "PerformActivities"
            },
            {
              "name": "AnswerQuestions"
            },
            {
              "name": "RaiseErrors"
            },
            {
              "name": "ScheduleWork",
              "details": "{\"scheduler\":{\"clock\":{\"timeAdjustment\":{\"milliseconds\":0}},\"interactionTimeout\":{\"milliseconds\":5000}}}"
            },
            {
              "name": "CallAnApi",
              "details": "{\"baseURL\":\"http://api.mathjs.org/v4/\",\"headers\":{\"common\":{\"Accept\":\"application/json, text/plain, */*\"}},\"timeout\":10000}"
            },
            {
              "name": "TakeNotes",
              "details": "{\"notepad\":{}}"
            }
          ]
        }
      ],
      "id": "/__w/serenity-js-mocha-template/serenity-js-mocha-template/spec/math-js_api.spec.ts:POST /v4 supports calculating multiple expressions in one request@serenity-js-mocha-template"
    }
  ],
  "history": [
    {
      "timestamp": "2026-11-22T22:40:35.328Z",
      "duration": 8816,
      "outcomes": {
        "passed": 2,
        "failed": 0,
        "pending": 0,
        "skipped": 0,
        "compromised": 0,
        "error": 0
      },
      "label": "1",
      "slowest": 4874,
      "fastest": 3939,
      "average": 4407,
      "commit": "8609f6b8dceb0c8f4ed7696025791dbfc4187b91",
      "branch": "main",
      "ciJobUrl": "https://github.com/serenity-js-agent/serenity-js-mocha-template/actions/runs/45078883616",
      "repositoryUrl": "https://github.com/serenity-js-agent/serenity-js-mocha-template",
      "score": {
        "confidence": 100,
        "passRate": 100,
        "consistency": 100,
        "completeness": 100
      }
    }
  ],
  "tags": [
    {
      "type": "feature",
      "name": "Math-js API",
      "scenarioCount": 2,
      "passed": 2,
      "failed": 0,
      "skipped": 0
    },
    {
      "type": "module",
      "name": "serenity-js-mocha-template",
      "scenarioCount": 2,
      "passed": 2,
      "failed": 0,
      "skipped": 0
    }
  ],
  "inconsistentTests": [],
  "newFailures": [],
  "newPasses": [],
  "systemContext": {
    "nodeVersion": "v24.22.3",
    "os": {
      "name": "linux",
      "version": "7.0.0-1016-aws",
      "arch": "x64"
    },
    "serenityVersion": "3.49.0",
    "testRunner": {
      "name": "Mocha",
      "version": "12.0.3"
    },
    "browsers": [],
    "ci": {
      "provider": "GitHub Actions",
      "buildNumber": "1",
      "branch": "main",
      "commit": "8609f6b8dceb0c8f4ed7696025791dbfc4187b91",
      "commitMessage": "chore(deps): update ghcr.io/serenity-js/playwright docker tag to v1.65.1 (#1086)",
      "commitAuthor": "renovate[bot]",
      "jobUrl": "https://github.com/serenity-js-agent/serenity-js-mocha-template/actions/runs/45078883616",
      "workflow": "build",
      "repositoryUrl": "https://github.com/serenity-js-agent/serenity-js-mocha-template",
      "triggeredBy": "serenity-js-agent"
    },
    "projectName": "@serenity-js/serenity-js-mocha-template",
    "packageManager": "npm"
  },
  "capabilities": {
    "type": "directory",
    "name": "spec",
    "outcomes": {
      "passed": 2,
      "failed": 0,
      "pending": 0,
      "skipped": 0,
      "compromised": 0,
      "error": 0
    },
    "scenarioCount": 2,
    "children": [
      {
        "type": "file",
        "name": "math-js_api",
        "outcomes": {
          "passed": 2,
          "failed": 0,
          "pending": 0,
          "skipped": 0,
          "compromised": 0,
          "error": 0
        },
        "scenarioCount": 2,
        "scenarios": [
          {
            "name": "GET /v4/?expr supports calculating a single expression",
            "outcome": "SUCCESS",
            "executionHistory": [
              "SUCCESS"
            ]
          },
          {
            "name": "POST /v4 supports calculating multiple expressions in one request",
            "outcome": "SUCCESS",
            "executionHistory": [
              "SUCCESS"
            ]
          }
        ],
        "score": {
          "confidence": 100,
          "passRate": 100,
          "completeness": 100,
          "consistency": 100
        }
      }
    ],
    "score": {
      "confidence": 100,
      "passRate": 100,
      "completeness": 100,
      "consistency": 100
    }
  },
  "specDirectory": "spec"
};
