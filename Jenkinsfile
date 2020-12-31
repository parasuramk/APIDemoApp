pipeline {
  agent any
  stages {
    stage('error') {
      parallel {
        stage('SonarQube') {
          steps {
            withSonarQubeEnv(installationName: 'http://34.126.117.238:9000/', credentialsId: 'APIDemoApp')
          }
        }

        stage('') {
          steps {
            waitForQualityGate(credentialsId: 'APIDemoApp', abortPipeline: true)
          }
        }

      }
    }

  }
}