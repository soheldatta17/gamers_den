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
                    // Build the Docker image for the Vite app
                    sh 'docker build -t $DOCKER_IMAGE:$DOCKER_TAG .'
                }
            }
        }

        stage('Run Docker Container') {
            steps {
                script {
                    // Run the Docker container with the image built
                    sh 'docker run -d -p 8080:80 $DOCKER_IMAGE:$DOCKER_TAG'
                }
            }
        }

        stage('Clean Up') {
            steps {
                script {
                    // Clean up any old containers if necessary
                    sh 'docker ps -aq | xargs docker rm -f'
                }
            }
        }
    }

    post {
        always {
            // Clean workspace after the job is done
            cleanWs()
        }
    }
}
