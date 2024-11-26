<template>
  <div class="container mx-auto px-4 py-8">
    <div class="flex flex-col md:flex-row items-center mb-8">
      <img
        src="/personal/WHITE BACKGROUND.jpg"
        alt="Profile"
        class="w-48 h-48 rounded-full object-cover mb-4 md:mr-8 md:mb-0"
      />
      <div>
        <h1 class="text-3xl font-bold dark:text-white text-gray-800 mb-2">
          Rollen Asistores
        </h1>
        <p class="text-xl dark:text-white text-gray-600 mb-4">
          Full Stack Developer
        </p>
        <div class="flex space-x-4">
          <a
            v-for="social in socialLinks"
            :key="social.name"
            :href="social.url"
            target="_blank"
            class="text-green-600 hover:text-green-800 flex items-center"
          >
            <component :is="social.icon" class="mr-2 w-5 h-5" />
            {{ social.name }}
          </a>
        </div>
      </div>
    </div>

    <div class="grid md:grid-cols-2 gap-8">
      <Card>
        <CardHeader>
          <CardTitle class="flex items-center">
            <User class="mr-2 w-6 h-6 text-blue-500" />
            About Me
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p class="dark:text-white text-gray-700 mt-2">
            A brief introduction about yourself, your passions, professional
            interests, and what drives you.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle class="flex items-center">
            <Briefcase class="mr-2 w-6 h-6 text-green-500" />
            Professional Experience
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div class="space-y-4">
            <div>
              <h3 class="font-semibold dark:text-primary text-gray-800">
                AscendProfit
              </h3>
              <p class="dark:text-white text-gray-600">
                Freelancer | 2022-2023
              </p>
              <ul
                class="list-disc list-inside dark:text-primary text-gray-700 mt-2"
              >
                <li>Social Media Manager</li>
                <li>Graphic Designer</li>
                <li>Layout Artist</li>
                <li>Web Programmer</li>
                <li>Video Editor</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle class="flex items-center">
            <GraduationCap class="mr-2 w-6 h-6 text-purple-500" />
            Education
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div>
            <h3 class="font-semibold dark:text-primary text-gray-800">
              Bachelor Of Science in Information Technology
            </h3>
            <p class="text-gray-200">
              Cavite State University | 2022 - Present
            </p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle class="flex items-center">
            <MapPin class="mr-2 w-6 h-6 text-red-500" />
            Contact Information
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div class="space-y-2">
            <p class="flex items-center">
              <Mail class="mr-2 w-5 h-5 text-gray-600" />
              asistoresrlc1@gmail.com
            </p>
            <p class="text-gray-300">General Trias, Cavite, Philippines</p>
          </div>
        </CardContent>
      </Card>
    </div>
  </div>
</template>

<script setup>
import {
  User,
  Briefcase,
  GraduationCap,
  MapPin,
  Mail,
  Github,
  Linkedin,
} from "lucide-vue-next";

const socialLinks = [
  {
    icon: Github,
    name: "GitHub",
    url: "https://github.com/rollenasistores",
  },
  {
    icon: Linkedin,
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/rollen-asistores-1985b1195/",
  },
];
</script>

<style scoped>
/* Additional custom styles can be added here if needed */
</style>
