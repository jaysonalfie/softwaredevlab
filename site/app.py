from flask import Flask, render_template,request, session,redirect, url_for,jsonify #using template
import secrets
import json



#creating a flask app
app = Flask(__name__)
app.secret_key =secrets.token_hex(16) # Change this to a secure random key

# Dummy user data (replace with your database queries)
users = {
    'jayson@gmail.com': {'password': 'jayson102', 'id': 1},
}

# data= []

# file_path = 'user_data.json'

# Write the empty list to the JSON file
# with open(file_path, 'w') as json_file:
#    json.dump(data, json_file)
# @app.route('/', methods=['GET', 'POST'])



#creating event list that will be passed to calendar
# EVENTS = [
    
#     {
#        'title' :'Arcane Dinner Event',
#        'start' :'2023-08-29',
#     },
#     {
#        'title' :'Synergy concert',
#        'start' :'2023-08-31',
#     }
    
# ]



#registering route to application
@app.route("/")
def hello_w0rld():
    return render_template('index.html')

@app.route("/dashboard")
def dashboard():
    return render_template('dashboard.html')
    #Check if the user is authenticated(has a valid session)
    if 'user_id' in session:
        return 'Welcome to the dashboard'
    else:
        return redirect(url_for('login'))

@app.route("/events")
def events():
    return render_template('events.html')  

@app.route("/notifications")
def notifications():
    return render_template('notifications.html')

@app.route("/login", methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        email = request.form.get('email')
        password = request.form.get('password')

        # Check if the submitted email exists in the dummy user data
        if email in users and users[email]['password'] == password:
            # Authentication successful, store user ID in session
            session['user_id'] = users[email]['id']
            return redirect(url_for('dashboard'))
        else:
            error_message = 'Invalid credentials. Please try again.'
            return render_template('login.html', error_message=error_message)

        return render_template('login.html')

    
    

@app.route("/signup")
def signup():
    # user_data = request.get_json()

    # Validate user data (e.g., check if email is unique)
    
    # Save user data to a JSON or text file 
    # with open('user_data.json', 'a') as file:
    #     file.write(json.dumps(user_data) + '\n')

    # # Return a success response to the client
    # return jsonify({'success': True})
    
    return render_template('signup.html') 


@app.route("/calendar")
def calendar():
    return render_template('calendar.html') 
    
# @app.route("/api/events")
# def list_events():
#     return jsonify(EVENTS)    
                        


if __name__ == "__main__":
     #starting and running of the app
     app.run(host='0.0.0.0', debug=True)
