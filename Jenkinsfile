pipeline {
    agent any

    stages {
        stage('Deploy application') {
            agent {
                docker {
                    image 'node'
                    reuseNode true
                }
            }

            steps {
                sh '''
                    npm install netlify
                '''
            }
        }
    }
}