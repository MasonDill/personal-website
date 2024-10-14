'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Skeleton } from "@/components/ui/skeleton"
import { ExternalLink, Star, GitFork } from 'lucide-react'

import { Octokit } from 'octokit'
import githubConfig from '@/config/github.json'
const octokit = new Octokit({ auth: githubConfig.auth_token })

interface Repository {
  name: string
  description: string
  html_url: string
  stargazers_count: number
  forks_count: number
  language: string
}

export default function Projects() {
  const [repos, setRepos] = useState<Repository[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await octokit.request('GET /user/repos', {
          sort: 'updated',
          per_page: 6,
          visibility: 'public'
        })
        setRepos(response.data)
      } catch (error) {
        console.error('Error fetching repositories:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchRepos()
  }, [])

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {loading ? (
          Array(6).fill(0).map((_, index) => (
            <Card key={index} className="flex flex-col">
              <CardHeader>
                <Skeleton className="h-6 w-3/4 mb-2" />
                <Skeleton className="h-4 w-full" />
              </CardHeader>
              <CardContent className="flex-grow">
                <Skeleton className="h-4 w-full mb-2" />
                <Skeleton className="h-4 w-5/6" />
              </CardContent>
              <CardFooter>
                <Skeleton className="h-8 w-full" />
              </CardFooter>
            </Card>
          ))
        ) : (
          repos.map((repo) => (
            <Card key={repo.name} className="flex flex-col">
              <CardHeader>
                <CardTitle>{repo.name}</CardTitle>
                <CardDescription>{repo.language}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-sm text-gray-600">{repo.description}</p>
              </CardContent>
              <CardFooter className="flex justify-between items-center">
                <div className="flex space-x-4">
                  <span className="flex items-center text-sm text-gray-500">
                    <Star className="w-4 h-4 mr-1" />
                    {repo.stargazers_count}
                  </span>
                  <span className="flex items-center text-sm text-gray-500">
                    <GitFork className="w-4 h-4 mr-1" />
                    {repo.forks_count}
                  </span>
                </div>
                <Button variant="outline" size="sm" asChild>
                  <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="flex items-center">
                    View on GitHub
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))
        )}
      </div>
    </div>
  )
}