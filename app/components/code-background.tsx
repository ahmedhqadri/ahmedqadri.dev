"use client"

import { useEffect, useRef, useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const SNIPPETS = [
  'git push origin main',
  'docker compose up -d',
  'kubectl apply -f deploy.yaml',
  'SELECT * FROM users WHERE active = true',
  'CREATE TABLE sessions (id UUID PRIMARY KEY)',
  'async function handleRequest(req, res) {}',
  'const api = express.Router()',
  'AWS S3.putObject({ Bucket, Key, Body })',
  'terraform plan && terraform apply',
  'redis.set("session:abc", token, "EX", 3600)',
  'mongoDB.collection("orders").aggregate([])',
  'GraphQL { user(id: $id) { name, email } }',
  'addEventListener("fetch", event => {})',
  'navigator.geolocation.getCurrentPosition()',
  'WebSocket.send(JSON.stringify(payload))',
  'JWT.verify(token, process.env.SECRET)',
  'bcrypt.hash(password, saltRounds)',
  'CORS: Access-Control-Allow-Origin: *',
  'CI/CD: pipeline triggered on merge',
  'Lambda: exports.handler = async (event) => {}',
  'gRPC.service.UserService = { GetUser }',
  'queue.publish("email.send", { to, body })',
  'cache.invalidate("/api/v2/products")',
  'React Native: <ScrollView> <FlatList />',
  'Swift: URLSession.shared.dataTask(with: url)',
  'flutter build apk --release',
  'nginx: proxy_pass http://upstream;',
  'SSL: certbot renew --dry-run',
  'helm upgrade --install app ./chart',
  'prometheus.io/scrape: "true"',
  'ECS taskDefinition: { cpu: 512, memory: 1024 }',
  'OAuth2: grant_type=authorization_code',
  'POST /api/v1/auth/login HTTP/1.1',
  'Content-Type: application/json',
  'python manage.py migrate',
  'pip install fastapi uvicorn',
  'go build -o server ./cmd/api',
  'cargo run --release',
  'ssh deploy@prod "systemctl restart app"',
  'log.info("Request processed in ${ms}ms")',
]

interface ActiveSnippet {
  id: number
  text: string
  x: number
  y: number
}

function getRandomEdgePosition(): { x: number; y: number } {
  const side = Math.random()

  if (side < 0.35) {
    return { x: 2 + Math.random() * 18, y: 10 + Math.random() * 75 }
  }
  if (side < 0.7) {
    return { x: 75 + Math.random() * 20, y: 10 + Math.random() * 75 }
  }
  if (side < 0.85) {
    return { x: 5 + Math.random() * 85, y: 5 + Math.random() * 12 }
  }
  return { x: 5 + Math.random() * 85, y: 78 + Math.random() * 15 }
}

export default function CodeBackground() {
  const gridRef = useRef<HTMLDivElement>(null)
  const [snippets, setSnippets] = useState<ActiveSnippet[]>([])
  const idRef = useRef(0)

  const spawnSnippet = useCallback(() => {
    const text = SNIPPETS[Math.floor(Math.random() * SNIPPETS.length)]
    const pos = getRandomEdgePosition()
    const id = idRef.current++

    setSnippets((prev) => {
      const next = [...prev, { id, text, ...pos }]
      if (next.length > 8) return next.slice(next.length - 8)
      return next
    })

    setTimeout(() => {
      setSnippets((prev) => prev.filter((s) => s.id !== id))
    }, 3500)
  }, [])

  useEffect(() => {
    const timers = [
      setTimeout(() => spawnSnippet(), 300),
      setTimeout(() => spawnSnippet(), 800),
      setTimeout(() => spawnSnippet(), 1400),
    ]

    const interval = setInterval(() => {
      spawnSnippet()
    }, 1800)

    return () => {
      timers.forEach(clearTimeout)
      clearInterval(interval)
    }
  }, [spawnSnippet])

  useEffect(() => {
    const grid = gridRef.current
    if (!grid) return

    const handleMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20
      const y = (e.clientY / window.innerHeight - 0.5) * 20
      grid.style.transform = `perspective(800px) rotateY(${x}deg) rotateX(${-y}deg)`
    }

    window.addEventListener('mousemove', handleMove)
    return () => window.removeEventListener('mousemove', handleMove)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <div
        ref={gridRef}
        className="absolute inset-0 transition-transform duration-300 ease-out"
        style={{ transform: 'perspective(800px) rotateY(0deg) rotateX(0deg)' }}
      >
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <AnimatePresence>
        {snippets.map((s) => (
          <motion.div
            key={s.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.97 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
            className="absolute text-sm md:text-base font-mono text-white/[0.12] whitespace-nowrap select-none pointer-events-none"
            style={{ left: `${s.x}%`, top: `${s.y}%` }}
          >
            {s.text}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
}
