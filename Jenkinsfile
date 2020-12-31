pipeline {
  agent none
  stages {
    stage('SonarQube analysis') {
      agent any
      steps {
        sh '''tools./hudson.plugins.sonar.SonarRunnerInstallation/sonarqube/bin/sonar-scanner -Dsonar.host.url=http://34.126.117.238:9000/ -Dsonar.login=admin -Dsonar.password=Passw0rd -Dsonar.projectKey=APIDemoApp -Dsonar.source=.
'''
      }
    }

  }
}