pipeline {
    agent any
    environment {
        CUSTOM_DOMAIN = 'https://sohel-datta.me'
    }
    stages {
        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }
        stage('Build') {
            steps {
                bat 'npm run build'
            }
        }
    }
}
