import angular from '../src/assets/svg/skills/angular.svg';
import aws from '../src/assets/svg/skills/aws.svg';
import bootstrap from '../src/assets/svg/skills/bootstrap.svg';
import c from '../src/assets/svg/skills/c.svg';
import cplusplus from '../src/assets/svg/skills/cplusplus.svg';
import css from '../src/assets/svg/skills/css.svg';
import docker from '../src/assets/svg/skills/docker.svg';
import git from '../src/assets/svg/skills/git.svg';
import graphql from '../src/assets/svg/skills/graphql.svg';
import html from '../src/assets/svg/skills/html.svg';
import java from '../src/assets/svg/skills/java.svg';
import javascript from '../src/assets/svg/skills/javascript.svg';
import mongodb from '../src/assets/svg/skills/mongoDB.svg';
import mysql from '../src/assets/svg/skills/mysql.svg';
import postgresql from '../src/assets/svg/skills/postgresql.svg';
import react from '../src/assets/svg/skills/react.svg';
import tailwind from '../src/assets/svg/skills/tailwind.svg';
import typescript from '../src/assets/svg/skills/typescript.svg';
import vitejs from '../src/assets/svg/skills/vitejs.svg';
import kubernetes from '../src/assets/svg/skills/kubernetes.svg';
import springboot from '../src/assets/svg/skills/springframework.svg';
import hibernate from '../src/assets/svg/skills/hibernate.svg';
import jira from '../src/assets/svg/skills/jira.svg';
import postman from '../src/assets/svg/skills/postman.svg';
import microservices from '../src/assets/svg/skills/microservices.svg';
import nodejs from '../src/assets/svg/skills/nodejs.svg';
import expressjs from '../src/assets/svg/skills/expressjs.svg';
import json from '../src/assets/svg/skills/json.svg'
import dsa from '../src/assets/svg/skills/dsa.svg';
import cicd from '../src/assets/svg/skills/cicd.svg'


// mapping
const skillsMap = {
  'angular': angular,
  'aws': aws,
  'bootstrap': bootstrap,
  'c': c,
  'c++': cplusplus,
  'css': css,
  'docker': docker,
  'git': git,
  'graphql': graphql,
  'html': html,
  'java': java,
  'javascript': javascript,
  'mongodb': mongodb,
  'mysql': mysql,
  'postgresql': postgresql,
  'react': react,
  'tailwind': tailwind,
  'typescript': typescript,
  'vitejs': vitejs,
  'kubernetes': kubernetes,
  'springboot': springboot,
  'hibernate': hibernate,
  'jira': jira,
  'postman': postman,
  'microservices': microservices,
  'nodejs': nodejs,
  'expressjs': expressjs,
  'json': json,
  'dsa': dsa,
  'cicd' : cicd,
};

export const skillsImage = (skill) => {
  if (!skill) return null;
  const key = skill.toLowerCase().trim();
  return skillsMap[key] || null; 
};
