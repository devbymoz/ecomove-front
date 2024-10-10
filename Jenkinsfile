pipeline {
    agent any
    
    environment {
        NETLIFY_AUTH_TOKEN = credentials('netlify-token-id') // Save your Netlify token in Jenkins credentials
    }
    
    stages {
        stage('Install Dependencies') {
            steps {
                script {
                    // Install npm dependencies
                    sh 'npm install'
                }
            }
        }

        stage('Build Angular App') {
            steps {
                script {
                    // Build the Angular application for production
                    sh 'npm run build --prod'
                }
            }
        }

        stage('Install Netlify CLI') {
            steps {
                script {
                    // Install the Netlify CLI if it's not installed globally
                    sh 'npm install -g netlify-cli'
                }
            }
        }

        stage('Deploy to Netlify') {
            steps {
                script {
                    // Deploy the build folder to Netlify using CLI
                    sh 'netlify deploy --prod --dir=dist/your-angular-app-name --auth=$NETLIFY_AUTH_TOKEN --site=your-netlify-site-id'
                }
            }
        }
    }
    
    post {
        always {
            // Clean up workspace
            cleanWs()
        }
    }
}