# CV Builder - Real-Time Resume Generator

A modern, responsive web application for building professional resumes in real-time. This project demonstrates advanced state management and dynamic form handling using the latest Angular features.

## 🚀 Key Features

* **Instant Live Preview**: See your CV update instantly as you type, powered by **Angular Signals** for high-performance reactivity.
* **Dynamic Forms**: Easily add or remove multiple education entries using **Angular Reactive Forms** and `FormArray`.
* **Clean UI/UX**: A split-screen layout separating the data entry from the polished document preview.
* **Modern Tech Stack**: Built with Angular 21, utilizing standalone components and modern control flow.

## 🛠️ Technology Stack

* **Framework**: Angular 21 (Latest)
* **State Management**: Angular Signals
* **Forms**: Reactive Forms & Template-driven Forms
* **Styling**: Custom CSS with Flexbox layout

---

## 💻 Getting Started

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 21.2.1.

### Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## 📁 Project Structure

The project is organized into modular components and a centralized service for state management:

* **`src/app/services/cv.ts`**: The core logic using **Angular Signals** to provide a reactive, single source of truth for the CV data.
* **`src/app/components/personal-info`**: Handles personal details using Template-driven forms.
* **`src/app/components/education`**: A dynamic section managing multiple education entries via `FormArray`.
* **`src/app/components/cv-preview`**: A real-time rendering component that reflects changes instantly.

## 🧪 Testing

The project includes unit tests for both components and services using **Vitest**:

```bash
ng test
```

## 🛠️ Build & Deployment

To create a production-ready build:

```bash
ng build
```

The build artifacts will be stored in the ``` dist/  ```  directory, optimized for performance.

## 📄 License
This project is open-source and available under the MIT License.
