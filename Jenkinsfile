pipeline {
    agent any

    stages {
        stage('Build Docker Image') {
            steps {
                sh 'docker build -t ecomove-front-image ./'
            }
        }

        stage('Run Docker Container') {
            steps {
                sh '''
                    docker run -d --name ecomove-front-app -p 4200:80 ecomove-front-image
                    docker ps
                '''
            }
        }
    }
}