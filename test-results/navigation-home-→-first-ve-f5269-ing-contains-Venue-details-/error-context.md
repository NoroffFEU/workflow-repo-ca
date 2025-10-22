# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - banner [ref=e2]:
    - navigation [ref=e3]:
      - navigation [ref=e4]:
        - link "Logo" [ref=e6] [cursor=pointer]:
          - /url: /
        - generic [ref=e7]:
          - link "Home" [ref=e8] [cursor=pointer]:
            - /url: /
          - link "Login" [ref=e9] [cursor=pointer]:
            - /url: /login
          - link "Register" [ref=e10] [cursor=pointer]:
            - /url: /register
  - main [ref=e11]:
    - heading "Welcome to this site" [level=1] [ref=e12]
    - generic [ref=e13]: Loading...
```