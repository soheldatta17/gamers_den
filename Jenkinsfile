pipeline {
    agent any
    environment {
        // Define your custom domain here
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
        stage('Deploy') {
            steps {
                script {
                    // Add your deployment script here
                    // If you are using SCP or SSH, ensure SSL validation is skipped where necessary
                    
                    // Example SCP command that skips DNS or SSL validation issues (if any)
                    sh 'scp -o StrictHostKeyChecking=no -r ./build/* user@your-server:/path/to/deployment/folder'

                    // Or using SSH with options to skip SSL validation for DNS-related issues
                    sh 'ssh -o StrictHostKeyChecking=no user@your-server "cd /path/to/deployment/folder && npm install && pm2 restart your-app"'
                }
            }
        }
        stage('Notify') {
            steps {
                script {
                    // You can notify yourself or your team with a link to the app, for example using Slack or Email.

                    emailext(
                        subject: 'Deployment Successful',
                        body: "Your app has been successfully deployed. You can view it at ${CUSTOM_DOMAIN}",
                        to: 'soheldatta17@gmail.com'
                    )
                }
            }
        }
    }
}
