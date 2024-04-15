# ShortCat URL Shortener 🐱

Welcome to ShortCat, a simple URL shortener application. ShortCat provides an easy way to shorten long URLs, making them more manageable and shareable.

## Frontend

The frontend of ShortCat is built using [Astro](https://astro.build/) and [React](https://reactjs.org/), providing a sleek and responsive landing page for users to interact with the URL shortening service.

### Technologies Used:
- Astro
- React

### Setup Instructions:
1. **Clone this repository:**
   ```bash
   git clone https://github.com/ramicorrea21/shortcat.git
   ```
2. **Navigate to the frontend directory:**
   ```bash
   cd shortcat-frontend
   ```
3. **Install dependencies:**
   ```bash
   npm install
   ```
4. **Start the development server:**
   ```bash
   npm run dev
   ```
5. **Visit [http://localhost:3000](http://localhost:3000) in your browser to view the ShortCat landing page.**

## Backend

The backend of ShortCat is powered by [Flask](https://flask.palletsprojects.com/), [Flask-SQLAlchemy](https://flask-sqlalchemy.palletsprojects.com/), [Flask-Migrate](https://flask-migrate.readthedocs.io/), and other tools to handle URL shortening requests and database management.

### Technologies Used:
- Flask
- Flask-SQLAlchemy
- Flask-Migrate

### Setup Instructions:
1. **Clone the backend repository from [ShortCat Backend](https://github.com/ramicorrea21/shortcat-rest.git).**
2. **Navigate to the backend directory.**
3. **Install dependencies:**
   ```bash
   pip install -r requirements.txt
   ```
4. **Run the Flask application:**
   ```bash
   python app.py
   ```
5. **The backend server will start running at [http://localhost:5000](http://localhost:5000).**

### Note:
Make sure the frontend and backend servers are running simultaneously for the full functionality of ShortCat.

## Contributing
Contributions are welcome! Please feel free to open issues or submit pull requests to help improve ShortCat.
