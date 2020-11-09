# Events Back
## Installation

```bash
npm install
```

## Usage

import databases schema basedb.sql

```bash
npm run dev
```

## Routes
POST /auth/signup
```json
{
	"email":"valid@email.com",
	"password":"longerthan6",
	"name": "beutiful name",
	"roleId":2 
}
```
POST /auth/login
```json
{
	"email":"valid@email.com",
	"password":"longerthan6"
}
```
POST /auth/logout
```json
No params
```
GET /auth/permissions
```json
No params
```
POST /conference
```json
{
	"name":"cool event",
	"date":"2020-11-09T03:45:22.875Z",
	"quota": 100,
	"state": true,
	"location": "Los Angeles, CA"
}
```
POST /conference/join/{conferenceId}
```json
No params, just in route
```
GET /conference
```json
No params
```
PUT /conference/{conferenceId}
```json
{
	"name":"cool event",
	"date":"2020-11-09T03:45:22.875Z",
	"quota": 100,
	"state": true,
	"location": "Los Angeles, CA"
}
```
