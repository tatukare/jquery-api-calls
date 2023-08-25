# API Testing

### Video evidencia

[Link video API test](https://youtu.be/j9FhBUaohKQ)

---

## Endpoints

### Get Users List

```bash
curl --location 'https://reqres.in/api/users?page=2'
```

### Login

```bash
curl --location 'https://reqres.in/api/login' \
--header 'Content-Type: application/json' \
--data-raw '{
    "email": "eve.holt@reqres.in",
    "password": "cityslicka"
}'
```

### Register

```bash
curl --location 'https://reqres.in/api/register' \
--header 'Content-Type: application/json' \
--data-raw '{
    "email": "eve.holt@reqres.in",
    "password": "pistol"
}'
```
