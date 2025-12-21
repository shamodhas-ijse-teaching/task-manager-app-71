<h1 align="center">Advanced Mobile Application Development (AMD) – ITS2127</h1>
<p align="center">Detailed Lecture Notes</p>

---

# 🎯 Primary Goal

While this course covers the fundamental theories of mobile architecture, **our primary practical goal is to master React Native Development using the Expo Framework.**

By the end of this module, you will be proficient in:
* **Building Cross-Platform Apps:** Creating single-codebase applications that run natively on both **Android** and **iOS**.
* **Using Expo:** Leveraging the modern "batteries-included" workflow for rapid development, testing, and deployment.
* **Modern Routing:** Implementing navigation using the latest file-based **Expo Router**.

---

# 📘 Day 1: Foundations of Mobile Development

## 1.1 Understanding Application Platforms

Applications are software programs designed to run on different hardware platforms. They can be categorized as:

- **Desktop Applications:** Installed on PCs or laptops. Examples: Microsoft Word, Photoshop.
- **Web Applications:** Accessed through browsers. Examples: Gmail, Trello, Google Docs.
- **Mobile Applications:** Installed on smartphones or tablets. Examples: WhatsApp, Instagram, TaskHub.

Each platform has its own development requirements, limitations, and frameworks.

---

## 1.2 Relationship Between Device, OS, and Software

| Component             | Description                                           |
| :-------------------- | :---------------------------------------------------- |
| Device                | Physical hardware (PC, Mobile Phone, Tablet)          |
| Operating System (OS) | Manages hardware and provides an environment for apps |
| Software / Apps       | Programs users interact with                          |

### Human Analogy

Human → Life → Abilities
Device → OS → Applications

Applications depend on the OS in the same way abilities depend on life.

---

## 1.3 Desktop and Mobile Operating Systems

### Desktop OS

- Windows
- Linux
- macOS

### Mobile OS

- Android
- iOS
- Symbian OS (legacy)
- Windows Phone OS (discontinued)
- BlackBerry OS (legacy)

**Currently dominant:** Android & iOS

---

## 1.4 Evolution of Devices and Capabilities

| Device             | Main Capabilities                                   |
| :----------------- | :-------------------------------------------------- |
| Basic Mobile Phone | Calling, Messaging                                  |
| PC / Laptop        | Internet, Documents, Software                       |
| Smartphone         | Internet, Apps, Camera, GPS, Payments, Social Media |

---

## 1.5 Software Development Kits (SDKs)

A **Software Development Kit (SDK)** is a set of **tools**, **libraries**, and **documentation** that developers use to create applications for a specific platform. SDKs provide essential resources for **building**, **testing**, and **deploying** applications efficiently.

All SDKs are built around a strong **programming language foundation**, enabling developers to create **robust**, **scalable**, and **platform-specific applications**. They typically include **compilers**, **debuggers**, **APIs**, and **sample code** to simplify and accelerate the development process.

| Technology | SDK                              |
| :--------- | :------------------------------- |
| Java       | JDK (Java Development Kit)       |
| Android    | Android SDK (via Android Studio) |
| iOS        | iOS SDK (via Xcode – macOS only) |

---

## 1.6 Native Mobile Development

Native mobile development refers to building applications specifically for a single platform using its official programming language and tools.

<p align="center">
  <img src="https://raw.githubusercontent.com/shamodhas-ijse-teaching/file-hosting/main/images/native_mobile_development.png" 
       alt="Native Mobile Development Diagram" 
       style="width:100%; max-width:1200px; height:auto;">
  <br>
  <b>Figure: Native Mobile Development Architecture</b>
</p>

- **Native Android:** Java or Kotlin using **Android SDK** (via **Android Studio – Integrated Development Environment**)
- **Native iOS:** Swift or Objective-C using **iOS SDK** (via **Xcode – Integrated Development Environment**)

### Advantages

- Full access to device hardware (Camera, Sensors, GPS)
- High performance and speed
- Best platform-specific UI/UX
- Official support from platform vendors

### Disadvantages

- Separate codebase for each platform
- Higher development and maintenance cost
- Requires platform-specific expertise

**Native development is preferred when:**

- High performance is required (Games, AR/VR)
- Deep hardware access is critical
- Strict platform-specific UI rules apply

---

## 1.7 Cross-Platform Mobile Development

<p align="center">
  <img src="https://raw.githubusercontent.com/shamodhas-ijse-teaching/file-hosting/main/images/mobile_app_architecture.png"
       alt="Cross Platform Architecture"
       style="width:50%; max-width:1200px; display:block; margin:auto; border:1px solid #ccc; padding:10px; box-shadow:0 4px 8px rgba(0,0,0,0.1);">
  <br>
  <b>Figure: Cross-Platform Mobile Development Architecture</b>
</p>

**Cross-platform mobile development** allows developers to write a **single codebase** that runs on multiple platforms, such as **Android** and **iOS**. This approach reduces development time and effort while ensuring consistent functionality across devices.

### Advantages

- **Faster development and deployment:** One codebase for multiple platforms accelerates release cycles.
- **Lower maintenance cost:** Updates and bug fixes are applied once for all platforms.
- **Unified UI/UX across platforms:** Ensures a consistent user experience on Android and iOS devices.

### Popular Frameworks

- **React Native** (JavaScript / TypeScript)
- **Flutter** (Dart)
- **Xamarin** (C#)
- **Ionic** (JavaScript / Angular)

**Explanation:** In cross-platform development, a **single codebase** is written using frameworks like **React Native**, **Flutter**, or **Xamarin** and deployed to both **Android** and **iOS**. This approach allows for **faster development**, **simpler maintenance**, and a **consistent user experience** across multiple devices.

---

## 1.8 React Native Development Approaches

### A. React Native CLI

<p align="center">
  <img src="https://raw.githubusercontent.com/shamodhas-ijse-teaching/file-hosting/main/images/react_native_cli.png"
       alt="React Native CLI Architecture"
       style="width:50%; max-width:800px; border:1px solid #ccc; padding:10px; box-shadow:0 4px 8px rgba(0,0,0,0.1);">
  <br>
  <b>Figure: React Native CLI Architecture Overview</b>
</p>

**React Native CLI** is the “full control” approach to building React Native apps. Some call it the _bare-bones approach_ — you have access to everything and can tweak the native code, optimize performance, and implement advanced features. Perfect for big apps or when you need something highly customized.

- **Manual setup:** Requires installing and configuring **Android Studio** and **Xcode**.
- **Direct access to native modules:** Write custom Android or iOS code whenever needed.
- **Great for complex apps:** Ideal for apps requiring high performance or advanced features.
- **Requires some native knowledge:** Java/Kotlin for Android, Swift/Objective-C for iOS.

**Setup Resources:**

- [Setup Computer for React Native CLI](https://github.com/shamodhas-ijse-teaching/file-hosting/blob/main/documents/Setup_Computer.md)
- [React Native CLI Project Setup](https://github.com/shamodhas-ijse-teaching/react-native-cli-2025)

### B. Expo Framework

**Expo** is like a ready-to-go toolkit built on top of React Native. You don’t need to configure Android Studio or Xcode at first — Expo handles the setup and provides handy APIs for camera, notifications, sensors, and more. Great for learning, prototypes, or small to medium apps.

- **Minimal setup:** Start coding quickly without installing native tools.
- **Preconfigured Metro bundler:** Automatically compiles and runs your app.
- **Fast refresh & hot reload:** See changes instantly as you code.
- **Built-in APIs:** Camera, media, sensors, notifications, and more without writing native code.
- **Perfect for learning or prototypes:** Ideal for academic projects or quick experiments.

<div style="display:flex; justify-content:space-between; gap:20px; flex-wrap:wrap;">
  <div style="flex:1; min-width:100px; text-align:center;">
    <img src="https://raw.githubusercontent.com/shamodhas-ijse-teaching/file-hosting/main/images/expo_architecture.png"
         alt="Expo Architecture"
         style="width:100%; max-width:600px; border:1px solid #ccc; padding:10px; box-shadow:0 4px 8px rgba(0,0,0,0.1);">
    <br>
    <b>Figure: Expo Architecture Overview</b>
  </div>
  <div style="flex:1; min-width:100px; text-align:center;">
    <img src="https://raw.githubusercontent.com/shamodhas-ijse-teaching/file-hosting/main/images/expo_real_world_example.png"
         alt="Expo Real World Example"
         style="width:100%; max-width:600px; border:1px solid #ccc; padding:10px; box-shadow:0 4px 8px rgba(0,0,0,0.1);">
    <br>
    <b>Figure: Real-World Example of an Expo App</b>
  </div>
</div>

<br>

### **Key Differences: React Native CLI vs. Expo**

| Feature                    | React Native CLI                                                                                                                                                                           | Expo                                                                                                                                                                                        |
| :------------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Setup & Environment**    | **Complex & Manual.** You **must** install the **Android SDK** (typically via **Android Studio**) and the **iOS SDK** (via **Xcode** on macOS) before you can write a single line of code. | **Fast & Minimal.** No immediate need for Android Studio or Xcode. You can run the app instantly on your phone using the **Expo Go** app. (SDKs are only needed later if building locally). |
| **Native Access**          | **Unrestricted.** You have direct access to native Android (`android/`) and iOS (`ios/`) folders. You can link any native library manually.                                                | **Streamlined.** Access to a massive library of pre-built native modules. For custom native code, you use "Config Plugins" or "Prebuild" (modern approach) instead of "ejecting."           |
| **Best Use Case**          | Apps requiring deep system integration (e.g., specialized Bluetooth profiles, background threads) or when you need absolute control over the build process.                                | Ideal for **most** commercial apps, MVPs, and rapid development. Modern Expo (via EAS) handles large-scale apps effectively.                                                                |
| **Development Experience** | Steep learning curve. You often need to debug build errors in Android Studio or Xcode.                                                                                                     | Beginner-friendly workflow. Most debugging happens in the browser or terminal; complex native build errors are abstracted away.                                                             |

---

### **Important Concept: Cross-Platform vs. Native Build Tools**

Students often ask: *"If React Native is cross-platform, why do I need to install specific Android and iOS tools?"*

1.  **React Native is Cross-Platform (The Code):**
    You write your logic once in JavaScript/TypeScript. This single codebase is capable of running on both Android and iOS.

2.  **SDKs are the Build Tools (The Factory):**
    Even though the code is shared, the **final application file** (APK for Android, IPA for iOS) must be built using the manufacturer's official tools.
    * **Android Studio (Android SDK):** Is required to take your JavaScript code and compile it into an Android App.
    * **Xcode (iOS SDK):** Is required to take that *same* JavaScript code and compile it into an iOS App.

**In short:** The *development* requires platform-specific tools (SDKs) to do the heavy lifting of compiling, even though your *coding* is done in a cross-platform language.

---

### **Summary**

**React Native CLI** is the "bare-bones" approach. It gives you full control but demands that you manually set up the **Android SDK (using Android Studio)** and **iOS SDK (using Xcode)**. It is powerful but requires you to manage the native build environment yourself.

**Expo** is the "batteries-included" toolkit. It abstracts away the complex SDK setup, allowing you to start coding immediately. While it used to be just for beginners, modern Expo (with EAS) is powerful enough for most professional applications, only requiring the native SDKs if you decide to build the app locally on your own machine.

### **Which one should you choose?**
* Choose **Expo** if you want to start quickly and avoid configuration headaches.
* Choose **CLI** if you are already comfortable with Android Studio/Xcode and need specific, low-level native control from day one.
---

## 1.9 Navigation & Routing with Expo Router

**Expo Router** is a **file-based routing** system for React Native, inspired by Next.js. It automatically generates routes based on the folder structure inside the `app/` directory. This approach simplifies navigation and keeps your project organized.

- File-based routing (similar to Next.js)
- Routes are automatically generated from the **app/** folder
- Supports nested routes, dynamic routes, and route groups
- Integrates seamlessly with Stack, Tab, and Drawer navigation

---

### 1.9.1 Key Files in Expo Router

- **app/index.tsx** – **Application entry point**. This file corresponds to the root route `/` of your app.
- **index.tsx** – Default route for a folder:
  - `app/home/index.tsx` → `/home`
  - `app/test/index.tsx` → `/test`
- **\_layout.tsx** – Layout file for a folder. Wraps all pages in that folder with shared UI (header, footer, navigation). Example:
  - `app/(auth)/_layout.tsx` wraps login and register pages.
- **[param].tsx** – Dynamic route file. The name in brackets becomes a URL parameter:
  - `app/profile/[id].tsx` → /profile/123, /profile/456

---

### 1.9.2 Basic Routes

Basic route mapping uses file names:

| URL    | File          |
| :----- | :------------ |
| /      | app/index.tsx |
| /home  | app/home.tsx  |
| /about | app/about.tsx |

---

### 1.9.3 Dynamic Routes

Use square brackets `[]` for routes with variables:

```text
app/[id].tsx   → /123, /profile, /product-45
```

**Example:**

```tsx
import { Text } from "react-native"
import { useLocalSearchParams } from "expo-router"

export default function Page() {
  const params = useLocalSearchParams()
  return <Text>Dynamic Page: {params.id}</Text>
}
```

---

### 1.9.4 Nested Routes

**Nested folders define nested routes:**

```text
app/test/index.tsx         → /test
app/test/sample.tsx        → /test/sample
app/test/profile/[id].tsx  → /test/profile/123
```

---

### 1.9.5 Route Groups

**Use parentheses `()` to group routes logically without affecting URL paths:**

```text
app/(auth)/login.tsx     → /login
app/(auth)/register.tsx  → /register
```

---

### 1.9.6 Layout Files

**Layouts wrap child pages with shared UI components:**

- File naming: `layout.tsx` or `_layout.tsx`
- Can be nested for nested routes
- Reduces duplication and keeps UI consistent

**Example Layout:**

```tsx
// app/(auth)/_layout.tsx
import { View } from "react-native"

export default function AuthLayout({ children }) {
  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Header />
      {children}
    </View>
  )
}
```

---

### 1.9.7 Linking & Navigation

**Navigate programmatically using the `useRouter` hook:**

```tsx
import { useRouter } from "expo-router"
const router = useRouter()

router.push("/home") // Navigate to /home
router.replace("/login") // Replace current route
router.back() // Go back
```

---

### 1.9.8 Best Practices

- Use route groups to separate public/private pages
- Keep layouts reusable to reduce duplication
- Use dynamic routes for pages with parameters (profile, product pages)
- Organize nested routes into folders for clarity and maintainability

---

### 1.9.9 Visual Overview

<p align="center">
  <img src="https://raw.githubusercontent.com/shamodhas-ijse-teaching/file-hosting/main/images/expo_router_structure.png" 
       alt="Expo Router Folder Structure" 
       style="width:80%; max-width:1000px; border:1px solid #ccc; padding:10px; box-shadow:0 4px 8px rgba(0,0,0,0.1); border-radius:5px;">
  <br>
  <b>Figure: Example Folder Structure for Expo Router</b>
</p>

---

### 1.9.10 Summary

Expo Router simplifies navigation by mapping file/folder structures directly to routes. With **dynamic routes**, **nested routes**, **route groups**, and **layouts**, you can build scalable and maintainable navigation systems in React Native apps. Understanding key files like `index.tsx`, `_layout.tsx`, and `[param].tsx` is essential for effective routing.

---

# 📘 Day 2: Project Setup, Navigation & Development Workflow

## 2.1 Initial Project Setup

- **Project Folder:** task-manager-app
- **Application Name:** TaskHub
- Ensure Node.js ≥ 18
- Run `npx create-expo-app@latest`

---

## 2.2 Styling with NativeWind

- Tailwind-style utility classes for React Native
- Faster UI development
- Cleaner and more readable component code

[Official NativeWind Documentation](https://www.nativewind.dev/)

## 2.3 Running the Expo Project

| Command                    | Description                                                                           |
| :------------------------- | :------------------------------------------------------------------------------------ |
| `npx expo start`           | **Recommended:** Starts the development server (Metro Bundler).                       |
| `npm start`                | **Alias:** Usually runs `npx expo start` (defined in `package.json`).                 |
| `npx expo start -c`        | **Troubleshooting:** Clears the cache and restarts the server (fixes loading issues). |
| `npx expo start --android` | Opens the app immediately in an Android emulator.                                     |
| `npx expo start --ios`     | Opens the app immediately in an iOS simulator (Mac only).                             |

**Note:** The `.expo` folder stores cache files. Use the `-c` flag when styles or components do not update correctly.

---

## 2.4 Real-Time Updates & Caching

### A. Fast Refresh (Instant Updates)
* **What it does:** Instantly updates the app when you save code (`Ctrl + S`).
* **Benefit:** It keeps your typed data (state) safe while updating the design.

### B. Clearing Cache
* **When to use:** If the app behaves strangely or styles don't update.
* **Command:** Stop the server, then run either command:
    ```bash
    npx expo start -c
    # OR
    npx expo start --clear
    ```
---

## 2.5 Implementing Navigators

Navigation is a core part of mobile applications. In React Native with Expo Router, navigation is handled using layouts and file-based routing.

### A. Stack Navigation (Sequential Flow)
Stack navigation is used when screens follow a step-by-step or hierarchical flow.

* Login → Register → Dashboard
* Task List → Task Details → Edit Task

**Characteristics:**
* New screens are pushed on top of the stack
* Back navigation is automatic
* Commonly used for authentication flows

**Example Folder Structure:**
```text
app/
 ├── _layout.tsx      ← Stack layout
 ├── index.tsx
 ├── details.tsx
 ```
 ---

### B. Tab Navigation (Main Sections)
Tab navigation is used for the main sections of an application that users frequently switch between.

* Home
* Tasks
* Profile

**Characteristics:**
* Tabs are always visible
* Each tab maintains its own screen state
* Improves user experience in dashboard-based apps

**Example Folder Structure:**
```text
app/
 ├── (dashboard)/
 │    ├── _layout.tsx   ← Tab layout
 │    ├── home.tsx
 │    ├── tasks.tsx
 │    └── profile.tsx
 ```
---
## 2.6 Sample Project Structure
```text
app/
 ├── index.tsx
 ├── _layout.tsx
 ├── (auth)/
 │    ├── login.tsx
 │    ├── register.tsx
 │    └── _layout.tsx
 ├── (dashboard)/
 │    ├── home.tsx
 │    ├── tasks.tsx
 │    ├── profile.tsx
 │    └── _layout.tsx
 ```

---
## 2.7 Installing Expo-Compatible Libraries
To use icons in your app, we use the **@expo/vector-icons** library. This package includes popular icon sets like **Ionicons**, **FontAwesome**, and **MaterialIcons** ready to use without extra configuration.

**Installation:**

```bash
# Recommended: Installs the version compatible with your specific Expo SDK
npx expo install @expo/vector-icons

# Alternative: Installs the latest version directly from npm
npm install @expo/vector-icons
```

> **Note:** Using `npx expo install` is recommended because it automatically selects the version that matches your specific Expo SDK.

**Finding Icons:**
You don't need to guess icon names. Use the official directory to search for icons and see which family they belong to.

* [Browse All Icons (Expo Icon Directory)](https://icons.expo.fyi/Index)
* [Package Documentation (npm)](https://www.npmjs.com/package/@expo/vector-icons)