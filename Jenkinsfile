pipeline {
    agent any

    environment {
        DOCKER_COMPOSE_FILE = "docker-compose.yml"
    }

    stages {
        stage('Checkout') {
            steps {
                // Checkout the source code from the repository
                git 'https://github.com/soheldatta17/gamers_den'
            }
        }

        stage('Build and Run Docker Compose') {
            steps {
                script {
                    // Build and start the services defined in docker-compose.yml
                    sh 'docker-compose -f $DOCKER_COMPOSE_FILE up --build -d'
                }
            }
        }

        stage('Clean Up') {
            steps {
                script {
                    // Clean up the Docker Compose environment after the pipeline completes
                    sh 'docker-compose -f $DOCKER_COMPOSE_FILE down'
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
