# Signup API

## How to Run
1. Install dependencies: `npm install`
2. Start server: `npm run dev`

## Endpoint
`POST /signup`

**Request Body:**
```json
{
  "username": "john",
  "email": "john@example.com",
  "password": "securepass",
  "dob": "2000-01-01"
}



---

### **7. Deploy on Render**

1. Go to [https://render.com](https://render.com)
2. Create new **Web Service**
3. Connect your GitHub repo
4. Set:
   - **Build command:** `npm install`
   - **Start command:** `npm start`
   - **Node version:** Choose latest (if prompted)
5. Click Deploy

---

### **8. Final Step: Submission**

- Ensure your repo has all changes committed.
- Update the `README.md` with all info.
- Download your project as ZIP:
```bash
zip -r signup-api-project.zip .
