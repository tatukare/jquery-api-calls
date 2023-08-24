# Header 1 (nombre proyecto)

## Video evidencia

---

[Link del video youtube](https://www.somelink.com)

## Enpoints

---

### Get Users List

**Get Users List**

```bash
curl --location 'https://reqres.in/api/users?page=2'
```

### Login

**Login**

```bash
curl --location 'https://reqres.in/api/login' \
--header 'Content-Type: application/json' \
--data-raw '{
    "email": "eve.holt@reqres.in",
    "password": "cityslicka"
}'
```
