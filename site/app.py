from flask import Flask, render_template

#creating a flask app
app = Flask(__name__)

#registering route to application
@app.route("/")
def hello_w0rld():
    return render_template('index.html')

@app.route("/dashboard")
def dashboard():
    return render_template('dashboard.html')

@app.route("/events")
def events():
    return render_template('events.html')  

@app.route("/notifications")
def notifications():
    return render_template('notifications.html')

@app.route("/login")
def login():
    return render_template('login.html') 

@app.route("/signup")
def signup():
    return render_template('signup.html') 
                        


if __name__ == "__main__":
     #starting and running of the app
     app.run(host='0.0.0.0', debug=True)