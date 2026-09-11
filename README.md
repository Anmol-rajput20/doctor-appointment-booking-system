# 🏥 Doctor Appointment Booking System

A full-stack **Doctor Appointment Booking System** built using the MERN stack. The platform allows patients to find doctors, book appointments, make online payments, and manage their appointments. Doctors can manage their schedules and appointments, while administrators can manage doctors, appointments, and overall platform activity.

---


## 🌐 Live Demo

| Application | Link |
|---|---|
| 👤 Patient Website | [Visit Patient Website](https://doctor-appointment-booking-system-7fja-isn4vddds.vercel.app/) |
| 🛠️ Admin Panel | [Visit Admin Panel](https://doctor-appointment-booking-system-eqpa-j2m4e90hq.vercel.app/) |

> 💳 Razorpay is currently configured in Test Mode.

## 🚀 Features

### 👤 Patient Features

* Patient registration and login
* Secure JWT-based authentication
* View and update patient profile
* Upload profile picture using Cloudinary
* Browse available doctors
* Filter doctors by speciality
* View doctor details
* Select appointment date and time
* Real-time slot availability handling
* Book appointments
* Online appointment payment using Razorpay
* Razorpay payment signature verification
* View appointment history
* Cancel appointments
* Responsive user interface

### 👨‍⚕️ Doctor Features

* Doctor login
* Secure JWT-based authentication
* Doctor dashboard
* View assigned appointments
* View patient information
* Mark appointments as completed
* Cancel appointments
* Manage availability
* Update appointment fees
* Update clinic address
* Manage doctor profile

### 🛠️ Admin Features

* Admin authentication
* Admin dashboard
* View all doctors
* View all appointments
* Manage doctor availability
* Monitor appointment activity
* Manage doctors and platform data

---

## 🧑‍💻 Tech Stack

### Frontend

* React.js
* Vite
* Tailwind CSS
* React Router
* Axios
* Context API
* React Toastify

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT
* bcrypt
* Multer
* Cloudinary

### Payment

* Razorpay (Test Mode)

---

## 🏗️ Project Architecture

```text
Doctor Appointment Booking System
│
├── frontend
│   ├── src
│   │   ├── components
│   │   ├── pages
│   │   ├── context
│   │   ├── assets
│   │   └── App.jsx
│   │
│   └── Vite + React
│
├── admin
│   ├── src
│   │   ├── components
│   │   ├── pages
│   │   ├── context
│   │   └── App.jsx
│   │
│   └── Vite + React
│
└── backend
    ├── controllers
    ├── models
    ├── routes
    ├── middlewares
    ├── config
    └── server.js
```

---

## 🔐 Authentication

The application uses **JWT (JSON Web Token)** based authentication.

Separate authentication flows are implemented for:

* Patients
* Doctors
* Administrators

Protected routes use authentication middleware to verify the user's token before allowing access to sensitive operations.

Passwords are securely hashed using **bcrypt** before being stored in the database.

---

## 📅 Appointment Booking Flow

The appointment booking process works as follows:

```text
Patient
   │
   ▼
Select Doctor
   │
   ▼
Select Date & Time
   │
   ▼
Check Slot Availability
   │
   ▼
Create Appointment
   │
   ▼
Razorpay Payment
   │
   ▼
Verify Payment
   │
   ▼
Confirm Appointment
```

The system prevents users from booking an already occupied time slot.

---

## 💳 Razorpay Payment Integration

Razorpay has been integrated for online appointment payments.

The payment flow includes:

1. Patient selects an appointment slot.
2. Appointment is created.
3. Razorpay order is generated.
4. Patient completes payment.
5. Razorpay returns payment details.
6. Payment signature is verified on the backend.
7. Appointment payment status is updated.
8. Appointment becomes successfully paid.

> Razorpay is currently configured in **Test Mode** for development and demonstration purposes.

---

## ☁️ Cloudinary Integration

Cloudinary is used for storing and managing patient profile images.

The image upload flow is:

```text
User selects image
       ↓
Frontend sends image
       ↓
Backend receives file
       ↓
Multer processes upload
       ↓
Cloudinary stores image
       ↓
Image URL saved in MongoDB
```

---

## 🗄️ Database

The application uses **MongoDB** with **Mongoose** for database management.

Major collections/models include:

* User
* Doctor
* Appointment
* Admin-related data

Appointments maintain relationships between patients and doctors and store information such as:

* Patient details
* Doctor details
* Appointment date
* Appointment time
* Appointment fee
* Payment status
* Completion status
* Cancellation status

---

## 📊 Dashboards

### Admin Dashboard

The admin dashboard provides an overview of the platform, including:

* Total doctors
* Total appointments
* Appointment information
* Doctor availability
* Overall platform activity

### Doctor Dashboard

Doctors can monitor:

* Total appointments
* Earnings
* Patients
* Recent appointments
* Appointment status

---

## 📱 Responsive Design

The application is designed to work across different screen sizes, including:

* 💻 Desktop
* 💻 Laptop
* 📱 Mobile
* 📟 Tablet

Tailwind CSS is used to create the responsive user interface.

---


## 🧪 Testing

The application has been tested for the major user flows:

* Patient registration
* Patient login
* Patient profile management
* Doctor login
* Doctor profile management
* Appointment booking
* Slot availability
* Appointment cancellation
* Razorpay test payment
* Payment verification
* Admin login
* Admin appointment management
* Doctor appointment management
* Doctor dashboard
* Admin dashboard

---

## 🔮 Future Improvements

Some possible future improvements include:

* Email notifications
* SMS appointment reminders
* Google Calendar integration
* Doctor reviews and ratings
* Prescription management
* Medical history management
* Video consultations
* Advanced admin analytics
* Production payment integration
* Improved appointment search and filtering
* Deployment with CI/CD

---

## 📚 What I Learned

Through this project, I gained practical experience with:

* Full-stack MERN development
* REST API development
* React component architecture
* React Context API
* Authentication and authorization
* JWT-based protected routes
* Password hashing with bcrypt
* MongoDB and Mongoose
* Role-based access control
* File uploads
* Cloudinary integration
* Payment gateway integration
* Razorpay payment verification
* Appointment and slot management
* Backend middleware
* API error handling
* Responsive UI development

---

## 🎯 Project Highlights

* 🔐 Secure authentication system
* 👥 Separate Patient, Doctor and Admin roles
* 📅 Complete appointment management
* 💳 Razorpay payment integration
* ☁️ Cloudinary image storage
* 🗄️ MongoDB database
* 📊 Admin and Doctor dashboards
* 📱 Responsive design
* ⚡ RESTful backend APIs
* 🔄 Dynamic appointment and availability management

---

## 👨‍💻 Author

**Anmol Rajput**

MCA — Thapar Institute of Engineering & Technology

---

## ⭐ Support

If you found this project useful or interesting, consider giving the repository a ⭐ on GitHub.
