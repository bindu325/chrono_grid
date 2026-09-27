# ⏱️ ChronoGrid — Dynamic Timetable & Conflict Resolver (MERN Stack)

A production-grade, enterprise college timetable management platform equipped with an autonomous **Constraint Satisfaction Problem (CSP) solver engine**, multi-factor alternative ranking optimizer, and real-time collision detection.

Built specifically with the **MERN** stack:
- **Frontend**: React.js (Vite) + Tailwind CSS + Lucide React + Recharts + jsPDF
- **Backend**: Node.js + Express.js + REST APIs
- **Database**: MongoDB Atlas
- **ODM**: Mongoose
- **Security & Auth**: JWT + bcryptjs + Role-Based Access Control (RBAC) with Gmail domain validation

---

## 🔑 Demo Login Credentials

| Role | Email | Password | Admin Passkey |
|---|---|---|---|
| **System Administrator** | `admin.timetable@gmail.com` | `password123` | `ADMIN_2026` |
| **Faculty Member** | `priya.sharma.faculty@gmail.com` | `password123` | — |
| **Student / Viewer** | `student.viewer@gmail.com` | `password123` | — |

*(Quick-login buttons for all three roles are also available directly on the login screen for instant demoing!)*

---

## 📊 Pre-Loaded Demo Scenarios

The initial database seed automatically provisions **16 Faculty**, **10 Sections**, **22 Subjects**, **12 Rooms**, **36 Time Slots**, and **50+ Timetable Entries**, including 4 intentional conflicts:

1. **Scenario 1 — Faculty Double-Booking**: Dr. Ramesh Kumar assigned to CSE-A and CSE-B simultaneously on Monday 09:00–10:00.
2. **Scenario 2 — Room Double-Booking**: Room LH-101 assigned to both CSE-A (OS) and CSE-B (CN) on Monday 12:15–13:15.
3. **Scenario 3 — Faculty Availability Conflict**: Dr. Priya Sharma scheduled on Monday 10:00–11:00 while marked `UNAVAILABLE`.
4. **Scenario 4 — Capacity Constraint Violation**: CSE-A (60 students) assigned to Room LH-202 (capacity 35 seats).

---

## 📑 Export Options
- **Timetable PDF Report**: Section-wise, Faculty-wise, Room-wise, or Complete.
- **CSV Data Export**: Direct spreadsheet import.
- **Conflict Audit Report**: Printable summary of active system collisions.
