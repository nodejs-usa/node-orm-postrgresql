```
npm run dev
```

# 1
# localhost:3000/api/projects POST (Insertamos)

```
{
    "name": "project-testing",
    "priority": 3,
    "description": "demo",
    "deliverydate" : "2019-10-02"
}
```

# 2
# localhost:3000/api/projects/6 DELETE (Delete)

# 3
# localhost:3000/api/projects
# GET
# Leemos todos los proyectos con el id = 1

# 4
# localhost:3000/api/projects/1
# GET
# Leemos el proyecto con el id = 1


# 5
# localhost:3000/api/projects/1
# PUT

```
{
    "name": "project-update",
    "priority": 3,
    "description": "demo",
    "deliverydate" : "2019-10-02"
}
```
