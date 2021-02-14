---
id: doc2
title: Comparison Controller
sidebar_label: API Sample
---

Compare two entries or sources.

### `Compare Sources`

**POST /api/v1/compare/entries**  
Compare two sources against each other on the basis of the objects they contain.

#### Request Body Parameters

| Comparison Objects | Parameters | Type | Example |
| --- | --- | --- | --- |
| firstObject, secondObject | `entityType` | string | `Jobs`, `Calendars`, `Resources`, `Events`, `Variables`, `Jobclasses`, `Actions`, `Businessview`, `Tags`, `Agentlists`, `Fiscalcalendars`, `Timezones` |
|  | `sourceID` | int64 | `7` |
|  | `sourceType` | string | `Connection`, `Repository` |
|  | `versionId` | int64 | `5` |

#### Query Parameters

| Name | Description | Type |
| --- | --- | --- |
| `page` | Retrieves an indicated page (0..N). Default: `0` | int32 |
| `size` | A number of records per page. Default: `20` | int32 |
| `sort` | Sorting criteria. Format: `field,ACS/DESC` | string |

#### Request Example

```curl
curl -X POST "http://172.21.240.126:8082/api/v1/compare/sources" -H "accept: */*" -H "Content-Type: application/json" -d "{ \"firstObject\": { \"entityType\": \"JOBS\", \"sourceId\": 0, \"sourceType\": \"CONNECTION\", \"versionId\": 0 }, \"secondObject\": { \"entityType\": \"JOBS\", \"sourceId\": 0, \"sourceType\": \"CONNECTION\", \"versionId\": 0 }}"
```
#### Response Example

```json
{
  "difference": [
    {
      "changed": true,
      "leftId": 0,
      "leftValue": "string",
      "rightId": 0,
      "rightValue": "string"
    }
  ],
  "firstObject": {
    "entityType": "JOBS",
    "sourceId": 0,
    "sourceType": "CONNECTION",
    "versionId": 0
  },
  "secondObject": {
    "entityType": "JOBS",
    "sourceId": 0,
    "sourceType": "CONNECTION",
    "versionId": 0
  }
}
```
---
# Connection Controller

Manage operations with connections.

### `Get Connections`

**GET /api/v1/connections**  
Get a list of available connections.

#### Query Parameters

| Name | Description | Type |
| --- | --- | --- |
| `page` | Retrieves an indicated page (0..N). Default: `0` | int32 |
| `size` | A number of records per page. Default: `20` | int32 |
| `sort` | Sorting criteria. Format: `field,ACS/DESC` | string |

#### Request Example

```curl
curl -X GET "http://172.21.240.126:8082/api/v1/connections?page=0&size=20&sort=id%2CASC" -H "accept: */*"
```

#### Response Example

```json
[
  {
    "access": 0,
    "createBy": {
      "id": 0,
      "name": "string",
      "surname": "string",
      "username": "string"
    },
    "createTs": 0,
    "description": "string",
    "id": 0,
    "lastRefresh": 0,
    "name": "string",
    "state": "CREATING",
    "type": "LIVE",
    "updateBy": {
      "id": 0,
      "name": "string",
      "surname": "string",
      "username": "string"
    },
    "updateTs": 0
  }
]
```
---
# Entries Controller

Manage operations with entries.

### `Get Entries by Repo and Filter`

**GET /api/v1/entries/repository/{id}/{versionId}/{type}/filter**  
Get information on the entries specified by repository ID, repository version ID, and entry type. Filter the results, using the regular expressions search.

#### Path Parameters

| Name | Description | Type |
| --- | --- | --- |
| `id` | Repository ID | int64 |
| `versionId` | Version ID | int64 |
| `type` | Available type values: `Jobs`, `Calendars`, `Resources`, `Events`, `Variables`, `Jobclasses`, `Actions`, `Tags`, `Agentlists`, `Timezones` | string |

#### Query Parameters

| Name | Description | Type |
| --- | --- | --- |
| `filter` | Regular expressions search | string |
| `page` | Retrieves an indicated page (0..N). Default: `0` | int32 |
| `size` | A number of records per page. Default: `20` | int32 |
| `sort` | Sorting criteria. Format: `field,ACS/DESC` | string |

#### Request Example

```curl
curl -X GET "http://172.21.244.158:8082/api/v1/entries/repository/3/5/JOBS/filter?page=0&size=20&sort=id%2CASC" -H "accept: */*"
```

#### Response Example

```json
[
  {
    "description": "string",
    "fullName": "string",
    "id": 0,
    "name": "string",
    "parent": true,
    "parentId": 0,
    "parentName": "string",
    "type": "string"
  }
]
```
