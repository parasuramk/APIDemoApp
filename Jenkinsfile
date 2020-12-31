pipeline {
  agent none
  stages {
    stage('SonarQube analysis') {
      agent any
      steps {
        withSonarQubeEnv('sonarqube') {
          sh '''/var/lib/jenkins/tools/hudson.plugins.sonar.SonarRunnerInstallation/sonarqube/bin/sonar-scanner -Dsonar.host.url=http://34.126.117.238:9000 -Dsonar.login=admin -Dsonar.password=Passw0rd -Dsonar.projectKey=APIDemoApp -Dsonar.source=.
'''
        }
      }
    }
    stage("Quality Gate") {
      steps {
        withCredentials([string(credentialsId: 'sonar')]) {
          timeout(time: 5, unit: 'MINUTES') {
            waitForQualityGate abortPipeline: true
          }
        }
      }
    }
  }
}
