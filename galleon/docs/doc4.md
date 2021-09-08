---
id: doc4
title: Phone Number Storer
sidebar_label: Phones Database
---

The phone number storer is a database resource that lets you manage the phone numbers: adding, updating, and deleting.

https://phone.storer.com

## Add phone number

**POST** `/numbers`

Add a phone number to the database.

### Body Parameters

| Parameter name | Required | Type | Description |
| -------------- | -------- | ---- | ----------- |
| `number` | Required | String | The phone number you'd like to add. |
| `name` | Required | String | The name of the person the phone number belongs to. |
| `state` | Required | String | The US state the phone number comes from (state code). |

Example:

```json
{
  "number": "(800) 555-0100",
  "name": "John Doe",
  "state": "CA"
}
```

### Request Example

```curl
curl --location --request POST 'https://phone.storer.com/numbers' \
--header 'Authorization: Basic VXNlcm5hbWU6cGFzc3dvcmQ=' \
--form 'number="(800) 555-0100"' \
--form 'name="John Doe"' \
--form 'state="CA"'
```

### Response Example

```json
{
  "results": {
    "number": "(800) 555-0100",
    "name": "John Doe",
    "state": "CA",
    "date": "September 8th, 2021",
    "time": "14:00"
  },
  "status": "OK"
}
```

## Get Phone Numbers

**GET** `/numbers`

Gets a list of all the phone numbers in the database.

### Request Example

```curl
curl --location --request GET 'https://phone.storer.com/numbers' \
--header 'Authorization: Basic VXNlcm5hbWU6cGFzc3dvcmQ=' \
```

### Response Example

```json
{
  "results": {
    "numbers": [
      "(800) 555-0100",
      "(800) 555-0101",
      "(800) 555-0102"
    ]
  }
}
```

## Get Phone Number

**GET** `/numbers`

Gets a particular phone number from the database.

### Query Parameters

| Parameter name | Type | Description |
| -------------- | ---- | ----------- |
| `number` | String | Specify your search by the phone number. |
| `name` | String | Specify your search by the name of the person the phone number belongs to. |
| `state` | String | Specify your search by the US state the phone number comes from (state code). |

### Request Example

```curl
curl --location --request GET 'https://phone.storer.com/numbers?number=800-555-0100&name=JohnDoe&state=CA' \
--header 'Authorization: Basic VXNlcm5hbWU6cGFzc3dvcmQ=' \
```

### Response Example

```json
{
  "results": {
    "number": "(800) 555-0100",
    "name": "John Doe",
    "state": "CA",
    "date": "September 8th, 2021",
    "time": "14:00"
  }
}
```

## Update Phone Number Details

**PUT** `/numbers`

Update the details of a particular phone number.

### Query Parameters

| Parameter name | Type | Description |
| -------------- | ---- | ----------- |
| `number` | String | Specify the phone number for which you'd like to update the details. |

### Body Parameters

| Parameter name | Type | Description |
| -------------- | -------- | ---- | ----------- |
| `name` | String | The name of the person the phone number belongs to. |
| `state` | String | The US state the phone number comes from (state code). |

Example:

```json
{
  "name": "John Doe the second",
  "state": "NY"
}
```

### Request Example

```curl
curl --location --request PUT 'https://phone.storer.com/numbers?number=800-555-010' \
--header 'Authorization: Basic VXNlcm5hbWU6cGFzc3dvcmQ=' \
--form 'name="John Doe the second"' \
--form 'state="NY"'
```

### Response Example

```json
{
  "results": {
    "number": "(800) 555-0100",
    "name": "John Doe the second",
    "state": "NY",
    "date": "September 8th, 2021",
    "time": "15:00"
  },
  "status": "OK"
}
```

## Delete Phone Number

**DELETE** `/numbers`

Delete a particular phone number from the database.

### Query Parameters

| Parameter name | Type | Description |
| -------------- | ---- | ----------- |
| `number` | String | The phone number you'd like to delete. |

### Request Example

```curl
curl --location --request DELETE 'https://phone.storer.com/numbers?number=800-555-010' \
--header 'Authorization: Basic VXNlcm5hbWU6cGFzc3dvcmQ=' \
```

### Response Example

```json
{
  "status": "OK"
}
