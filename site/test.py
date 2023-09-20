import mysql.connector




cnx = mysql.connector.connect(user='root', password='',
                              host='127.0.0.1',
                              database='eveman')

cursor = cnx.cursor()

def signup():
    sql = "INSERT INTO `users` ( `Name`, `Email`, `Password`) VALUES ( %s, %s, %s);"
    message=""
    try:

        # Execute the SQL statement with data
        cursor.execute(sql, data)
         # Commit the transaction to save the changes
        cnx.commit()
        message ="Inserted successfuly"

    except Exception as e:
    # Handle other exceptions (generic)
        message = "An error occurred:", e
    # Validate user data (e.g., check if email is unique)
    print(message)
    
signup()