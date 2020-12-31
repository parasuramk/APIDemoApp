pipeline {
  agent none
  stages {
    stage('SonarQube analysis') {
      agent any
      steps {
        withSonarQubeEnv(installationName: 'sonarqube', credentialsId: 'APIDemoApp')
      }
    }

    stage('Quality Gate') {
      steps {
        timeout(time: 1, unit: 'HOURS') {
          waitForQualityGate(credentialsId: 'APIDemoApp', abortPipeline: true)
        }

      }
    }

  }
}