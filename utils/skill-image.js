import adobeXd from '../src/assets/svg/skills/adobe-xd.svg';
import adobeaudition from '../src/assets/svg/skills/adobeaudition.svg';
import afterEffects from '../src/assets/svg/skills/after-effects.svg';
import angular from '../src/assets/svg/skills/angular.svg';
import aws from '../src/assets/svg/skills/aws.svg';
import azure from '../src/assets/svg/skills/azure.svg';
import blender from '../src/assets/svg/skills/blender.svg';
import bootstrap from '../src/assets/svg/skills/bootstrap.svg';
import bulma from '../src/assets/svg/skills/bulma.svg';
import c from '../src/assets/svg/skills/c.svg';
import canva from '../src/assets/svg/skills/canva.svg';
import capacitorjs from '../src/assets/svg/skills/capacitorjs.svg';
import coffeescript from '../src/assets/svg/skills/coffeescript.svg';
import cplusplus from '../src/assets/svg/skills/cplusplus.svg';
import csharp from '../src/assets/svg/skills/csharp.svg';
import css from '../src/assets/svg/skills/css.svg';
import dart from '../src/assets/svg/skills/dart.svg';
import deno from '../src/assets/svg/skills/deno.svg';
import django from '../src/assets/svg/skills/django.svg';
import docker from '../src/assets/svg/skills/docker.svg';
import fastapi from '../src/assets/svg/skills/fastapi.svg';
import fastify from '../src/assets/svg/skills/fastify.svg';
import figma from '../src/assets/svg/skills/figma.svg';
import firebase from '../src/assets/svg/skills/firebase.svg';
import flutter from '../src/assets/svg/skills/flutter.svg';
import gcp from '../src/assets/svg/skills/gcp.svg';
import gimp from '../src/assets/svg/skills/gimp.svg';
import git from '../src/assets/svg/skills/git.svg';
import go from '../src/assets/svg/skills/go.svg';
import graphql from '../src/assets/svg/skills/graphql.svg';
import haxe from '../src/assets/svg/skills/haxe.svg';
import html from '../src/assets/svg/skills/html.svg';
import illustrator from '../src/assets/svg/skills/illustrator.svg';
import ionic from '../src/assets/svg/skills/ionic.svg';
import java from '../src/assets/svg/skills/java.svg';
import javascript from '../src/assets/svg/skills/javascript.svg';
import julia from '../src/assets/svg/skills/julia.svg';
import kotlin from '../src/assets/svg/skills/kotlin.svg';
import lightroom from '../src/assets/svg/skills/lightroom.svg';
import markdown from '../src/assets/svg/skills/markdown.svg';
import materialui from '../src/assets/svg/skills/materialui.svg';
import matlab from '../src/assets/svg/skills/matlab.svg';
import memsql from '../src/assets/svg/skills/memsql.svg';
import microsoftoffice from '../src/assets/svg/skills/microsoftoffice.svg';
import mongodb from '../src/assets/svg/skills/mongoDB.svg';
import mysql from '../src/assets/svg/skills/mysql.svg';
import nextjs from '../src/assets/svg/skills/nextJS.svg';
import nginx from '../src/assets/svg/skills/nginx.svg';
import numpy from '../src/assets/svg/skills/numpy.svg';
import nuxtjs from '../src/assets/svg/skills/nuxtJS.svg';
import opencv from '../src/assets/svg/skills/opencv.svg';
import photoshop from '../src/assets/svg/skills/photoshop.svg';
import php from '../src/assets/svg/skills/php.svg';
import picsart from '../src/assets/svg/skills/picsart.svg';
import postgresql from '../src/assets/svg/skills/postgresql.svg';
import premierepro from '../src/assets/svg/skills/premierepro.svg';
import prisma from '../src/assets/svg/skills/prisma.svg';
import python from '../src/assets/svg/skills/python.svg';
import pytorch from '../src/assets/svg/skills/pytorch.svg';
import react from '../src/assets/svg/skills/react.svg';
import ruby from '../src/assets/svg/skills/ruby.svg';
import selenium from '../src/assets/svg/skills/selenium.svg';
import sketch from '../src/assets/svg/skills/sketch.svg';
import strapi from '../src/assets/svg/skills/strapi.svg';
import svelte from '../src/assets/svg/skills/svelte.svg';
import swift from '../src/assets/svg/skills/swift.svg';
import tailwind from '../src/assets/svg/skills/tailwind.svg';
import tensorflow from '../src/assets/svg/skills/tensorflow.svg';
import typescript from '../src/assets/svg/skills/typescript.svg';
import unity from '../src/assets/svg/skills/unity.svg';
import vitejs from '../src/assets/svg/skills/vitejs.svg';
import vue from '../src/assets/svg/skills/vue.svg';
import vuetifyjs from '../src/assets/svg/skills/vuetifyjs.svg';
import webix from '../src/assets/svg/skills/webix.svg';
import wolframalpha from '../src/assets/svg/skills/wolframalpha.svg';
import wordpress from '../src/assets/svg/skills/wordpress.svg';
import pandas from '../src/assets/svg/skills/pandas.svg';
import scikitlearn from '../src/assets/svg/skills/scikit-learn.svg';
import dotnet from '../src/assets/svg/skills/dotnet.svg';
import dotnetcore from '../src/assets/svg/skills/dotnetcore.svg';
import kubernetes from '../src/assets/svg/skills/kubernetes.svg';
import linux from '../src/assets/svg/skills/linux.svg';
import sqlalchemy from '../src/assets/svg/skills/sqlalchemy.svg';

// mapping
const skillsMap = {
  'adobe xd': adobeXd,
  'adobe audition': adobeaudition,
  'after effects': afterEffects,
  'angular': angular,
  'aws': aws,
  'azure': azure,
  'blender': blender,
  'bootstrap': bootstrap,
  'bulma': bulma,
  'c': c,
  'canva': canva,
  'capacitorjs': capacitorjs,
  'coffeescript': coffeescript,
  'c++': cplusplus,
  'c#': csharp,
  'css': css,
  'dart': dart,
  'deno': deno,
  'django': django,
  'docker': docker,
  'fastapi': fastapi,
  'fastify': fastify,
  'figma': figma,
  'firebase': firebase,
  'flutter': flutter,
  'gcp': gcp,
  'gimp': gimp,
  'git': git,
  'go': go,
  'graphql': graphql,
  'haxe': haxe,
  'html': html,
  'illustrator': illustrator,
  'ionic': ionic,
  'java': java,
  'javascript': javascript,
  'julia': julia,
  'kotlin': kotlin,
  'lightroom': lightroom,
  'markdown': markdown,
  'materialui': materialui,
  'matlab': matlab,
  'memsql': memsql,
  'microsoft office': microsoftoffice,
  'mongodb': mongodb,
  'mysql': mysql,
  'next js': nextjs,
  'nginx': nginx,
  'numpy': numpy,
  'nuxt js': nuxtjs,
  'opencv': opencv,
  'photoshop': photoshop,
  'php': php,
  'picsart': picsart,
  'postgresql': postgresql,
  'premiere pro': premierepro,
  'prisma': prisma,
  'python': python,
  'pytorch': pytorch,
  'react': react,
  'ruby': ruby,
  'selenium': selenium,
  'sketch': sketch,
  'strapi': strapi,
  'svelte': svelte,
  'swift': swift,
  'tailwind': tailwind,
  'tensorflow': tensorflow,
  'typescript': typescript,
  'unity': unity,
  'vitejs': vitejs,
  'vue': vue,
  'vuetifyjs': vuetifyjs,
  'webix': webix,
  'wolframalpha': wolframalpha,
  'wordpress': wordpress,
  'pandas': pandas,
  'sklearn': scikitlearn,
  '.net': dotnet,
  '.net core': dotnetcore,
  'kubernetes': kubernetes,
  'linux': linux,
  'sqlalchemy': sqlalchemy,
};

export const skillsImage = (skill) => {
  if (!skill) return null;
  const key = skill.toLowerCase().trim();
  return skillsMap[key] || null; 
};
