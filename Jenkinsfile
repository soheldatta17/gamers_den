pipeline {
    agent any
    stages {
        stage('Checkout Code') {
            steps {
                checkout scm
            }
        }
        stage('Build Docker Image') {
            steps {
                sh 'docker build -t vite-app .'
            }
        }
        stage('Run Docker Container') {
            steps {
                sh 'docker stop vite-container || true'  // Stop the container if already running
                sh 'docker rm vite-container || true'    // Remove it if needed
                sh 'docker run -d -p 8080:80 --name vite-container vite-app'
            }
        }
    }
    post {
        always {
            cleanWs() // Clean up the workspace after the job
        }
    }
}
