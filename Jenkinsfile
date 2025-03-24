pipeline{
    agent any
    stages{
        stage('scrpts'){
            steps{
                bat 'python -m venv venv'
            }
        }
        stage('install dependencies'){
            steps{
                bat '''
                call venv\\Scripts\\activate
                pip install Flask flask_pymongo
                '''
            }
        }
        stage('running'){
            steps{
                bat 'call start_flask.bat'
            }
        }
    }

    post{
        success{
            echo 'Flask Success'
        }
        failure{
            echo 'Pipeline failed'
        }
    }
}