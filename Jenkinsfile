node {
  agent {
    docker { image 'node:carbon' }
  }
  stages {
    stage('Install dependencies') {
      sh 'yarn'
    }
  }
}