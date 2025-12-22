# NCERT Textbook Downloader

<div align="center">
  <img width="500" alt="NCERT Downloader Preview" src="https://github.com/user-attachments/assets/7e51cfe1-4027-42a1-815e-78f25874e010" />
  <br/>
  <br/>
  <p>
    <b>A modern, efficient, and user-friendly web application to browse and download NCERT textbooks.</b>
  </p>
</div>

---

## 📖 About

The **NCERT Textbook Downloader** is a client-side web application designed to simplify the process of accessing educational resources. It provides a clean, unified interface to fetch official NCERT PDF textbooks for Classes 1 to 12. Unlike the official site where you might need to navigate multiple dropdowns for each chapter, this tool allows for **bulk selection and downloading**, creating a streamlined experience for students and educators.

## ✨ Features

- **📚 Comprehensive Library**: Access the full catalog of NCERT textbooks for Classes 1 through 13.
- **⚡ Batch Download**: Select multiple books (or entire subjects) and download them instantly as a single ZIP file.
- **🔍 Smart Filtering**: Easily browse by Class and Subject with a responsive sidebar.
- **📱 Fully Responsive**: Optimized experience across Desktop, Tablet, and Mobile devices.
- **👆 Click-to-Select**: Intuitive card-based selection system—no tiny checkboxes.
- **🌗 Modern Aesthetics**: A polished, dark-themed UI that is easy on the eyes.

## 🛠️ Tech Stack

- **Core**: HTML5, CSS3, JavaScript (ES6+)
- **Libraries**:
  - [JSZip](https://stuk.github.io/jszip/): For generating ZIP archives of multiple PDFs client-side.
- **Icons**: SVG Icons for a lightweight and crisp look.

## 🚀 Getting Started

No installation or build process is required! This is a static web application.

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/NCERT-Textbook-Downloader.git
    ```
2.  **Navigate to the folder:**
    ```bash
    cd NCERT-Textbook-Downloader
    ```
3.  **Run the app:**
    - Simply open the `index.html` file in any modern web browser.

## 💡 How to Use

1.  **Filter**: Use the sidebar to click on a specific **Class** or **Subject**.
2.  **Select**: Click on the book cards you want to download.
    - *Tip*: Use the **"Select All"** button in the bottom right (or `Ctrl+A`) to select currently visible books.
    - *Tip*: Drag your mouse to create a selection box (marquee) over multiple books.
3.  **Download**: Click the **Download** floating action button.
    - If one book is selected, it opens directly.
    - If multiple are selected, they are zipped and downloaded together.

## ⚠️ Disclaimer

This project is an independent tool and is **not affiliated with, endorsed by, or connected to NCERT** (National Council of Educational Research and Training).
- All textbook content is fetched directly from NCERT's public PDF endpoints.
- This tool is intended for educational and personal use only. Please respect copyright regulations regarding the distribution of these materials.
