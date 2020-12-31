pipeline {
  agent any
  stages {
    stage('') {
      steps {
        withSonarQubeEnv(installationName: 'http://34.126.117.238:9000/', credentialsId: 'APIDemoApp') {
          waitForQualityGate(abortPipeline: true, credentialsId: 'APIDemoApp')
        }

      }
    }

  }
}