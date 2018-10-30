node {
  stage('test') {
    agent {
      docker { image 'node:carbon' }
      steps {
        sh 'node -v'
      }
    }
  }
}