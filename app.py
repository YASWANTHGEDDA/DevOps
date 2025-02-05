from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

# Route for the registration page
@app.route('/', methods=['GET', 'POST'])
def register():
    if request.method == 'POST':
        # Get form data
        full_name = request.form.get('full')
        username = request.form.get('username')
        email = request.form.get('email')
        phone = request.form.get('phone')
        password = request.form.get('password')
        confirm_password = request.form.get('confirm_password')
        gender = request.form.get('gender')

        # Validate the form data (you can add your own logic here)
        if password != confirm_password:
            return jsonify({'error': 'Passwords do not match!'})

        # Simulate saving data
        print(f"User Registered: {full_name}, {username}, {email}, {phone}, {gender}")

        # Return a success message
        return jsonify({'message': 'Registration successful!'})

    return render_template('index.html')

if __name__ == '__main__':
    app.run(debug=True)
