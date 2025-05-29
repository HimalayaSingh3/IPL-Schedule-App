Here's a clean and professional `README.md` for your **Upcoming IPL Matches App using React and the Cricbuzz API**:

---

````markdown
# 🏏 IPL Matches Viewer - React App

This is a simple and elegant React.js application that fetches and displays **Upcoming IPL 2025 Cricket Matches** using the Cricbuzz API from RapidAPI.


## 🚀 Features

- ✅ Fetches live IPL schedule from the Cricbuzz API
- ✅ Filters only **Indian Premier League (IPL)** matches
- ✅ Beautiful and responsive UI using **Tailwind CSS**
- ✅ Match details include:
  - Match name
  - Match date
  - Venue
  - Match time
  - Teams playing

---

## 🛠 Tech Stack

- [React](https://reactjs.org/)
- [Axios](https://axios-http.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Cricbuzz API (via RapidAPI)](https://rapidapi.com/apidojo/api/cricbuzz-cricket)

---

## 📦 Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/HimalayaSingh3/IPL-Schedule-App.git
   cd ipl-matches-viewer
````

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Start the development server:**

   ```bash
   npm run dev
   ```

---



Update the fetch config accordingly in your code:

```js
headers: {
  'x-rapidapi-key': "",
  'x-rapidapi-host': "",
}
```

---

## 📁 Project Structure

```
src/
│
├── components/
│   └── CricketApi.jsx     # Main IPL component
│
├── App.jsx                # Entry point
└── main.jsx               # React DOM bootstrap
```

---

## 📸 Screenshot

<!-- Add a screenshot of the running app -->

![Screenshot 2025-05-29 103208](https://github.com/user-attachments/assets/2b29cba9-12a4-4b62-b308-2f3839e9643f)


---

## 🙌 Acknowledgements

* [Cricbuzz API](https://rapidapi.com/apidojo/api/cricbuzz-cricket) via RapidAPI
* [Tailwind CSS](https://tailwindcss.com/)
* [React](https://reactjs.org/)

---

## 📃 License

This project is licensed under the [MIT License](LICENSE).

---

## 🤝 Contributing

Contributions are welcome! Feel free to open issues or pull requests.

---

## ✨ Contact

Made with 💙 by [Himalaya Singh](https://github.com/HimalayaSingh3)

```
