pipeline {
        agent none
        stages {
          stage("SonarQube analysis") {
            agent any
            steps {
              withSonarQubeEnv(installationName: 'http://34.126.117.238:9000/', credentialsId: 'APIDemoApp') {
              }
            }
          }
          stage("Quality Gate") {
            steps {
              timeout(time: 1, unit: 'HOURS') {
                waitForQualityGate(credentialsId: 'APIDemoApp', abortPipeline: true)
              }
            }
          }
        }
      }
