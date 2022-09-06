pipeline {
    agent { docker { image 'node:16.13.1-alpine' } }
    stages {
        stage('build') {
            steps {
                echo "Job runnning successfully"
                sh 'node --version'
            }
        }
    }
}