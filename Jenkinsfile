pipeline {
    agent any

    environment {
        DOCKER_IMAGE = "vite-app"
        DOCKER_TAG = "latest"
    }

    stages {
        stage('Checkout') {
            steps {
                // Checkout the source code from the repository
                git 'https://github.com/soheldatta17/gamers_den'
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    // Build the Docker image using the Dockerfile in your repository
                    sh 'docker build -t $DOCKER_IMAGE:$DOCKER_TAG .'
                }
            }
        }

        stage('Run Docker Container') {
            steps {
                script {
                    // Run the Docker container from the image you just built
                    sh 'docker run -d -p 8080:80 $DOCKER_IMAGE:$DOCKER_TAG'
                }
            }
        }

        stage('Clean Up') {
            steps {
                script {
                    // Clean up old containers if necessary
                    sh 'docker ps -aq | xargs docker rm -f'
                }
            }
        }
    }

    post {
        always {
            cleanWs()  // Clean workspace after job completion
        }
    }
}
