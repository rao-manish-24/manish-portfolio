'use client';
import { useState } from 'react';

const SystemDesign = () => {
  const [selectedAnswers, setSelectedAnswers] = useState({});

  const questions = [
    {
      id: 1,
      question: "When designing Instagram's photo storage system, why use Blob storage?",
      answers: [
        "Because SQL databases are too mainstream",
        "To efficiently store and retrieve large binary objects like images",
        "To make the photos look more aesthetic",
        "Because 'blob' sounds like a cute mascot"
      ],
      correctAnswer: "To efficiently store and retrieve large binary objects like images",
      explanation: "Blob storage is optimized for storing large unstructured data like images, providing cost-effective storage, high availability, and fast access times."
    },
    {
      id: 2,
      question: "Why use consistent hashing in a distributed cache system?",
      answers: [
        "To make whiteboard interviews more interesting",
        "Because random hashing felt too unpredictable",
        "To minimize cache redistribution when scaling nodes",
        "To impress the senior architects"
      ],
      correctAnswer: "To minimize cache redistribution when scaling nodes",
      explanation: "Consistent hashing ensures that when adding or removing nodes, only a small fraction of keys need to be remapped, maintaining system performance during scaling operations."
    },
    {
      id: 3,
      question: "What's the purpose of a rate limiter in API design?",
      answers: [
        "To give servers regular coffee breaks",
        "Because unlimited anything is suspicious",
        "To make users appreciate your API more",
        "To prevent abuse and ensure fair resource usage"
      ],
      correctAnswer: "To prevent abuse and ensure fair resource usage",
      explanation: "Rate limiters protect APIs from abuse, ensure fair resource allocation among users, and help maintain system stability under high load conditions."
    },
    {
      id: 4,
      question: "Why implement a Load Balancer in a web architecture?",
      answers: [
        "To make system diagrams look more professional",
        "To distribute traffic and improve availability",
        "Because single points of failure are too boring",
        "To justify the infrastructure budget"
      ],
      correctAnswer: "To distribute traffic and improve availability",
      explanation: "Load balancers distribute incoming traffic across multiple servers, improving system availability, fault tolerance, and response times."
    },
    {
      id: 5,
      question: "When designing Twitter's feed system, why use a fanout service?",
      answers: [
        "Because real-time computation was too simple",
        "To keep database administrators on their toes",
        "To pre-compute and deliver feeds efficiently",
        "To make celebrities feel more important"
      ],
      correctAnswer: "To pre-compute and deliver feeds efficiently",
      explanation: "Fanout services pre-compute and push content to users' feeds, enabling quick feed loading and efficient handling of high-volume social networks."
    },
    {
      id: 6,
      question: "Why use a message queue in a payment processing system?",
      answers: [
        "To make the money move slower",
        "To ensure reliable asynchronous processing",
        "To give transactions a waiting room",
        "Because synchronous processing wasn't exciting enough"
      ],
      correctAnswer: "To ensure reliable asynchronous processing",
      explanation: "Message queues ensure reliable processing of payments, handle traffic spikes, and maintain system integrity even if downstream services fail."
    },
    {
      id: 7,
      question: "When designing Google Drive, why use chunked file transfer?",
      answers: [
        "To make progress bars more interesting",
        "To give network packets some exercise",
        "To enable resumable uploads and better reliability",
        "Because whole files were too mainstream"
      ],
      correctAnswer: "To enable resumable uploads and better reliability",
      explanation: "Chunked file transfer allows for resumable uploads, better handling of large files, and improved reliability in case of network issues."
    },
    {
      id: 8,
      question: "Why use Redis in a real-time leaderboard system?",
      answers: [
        "Because it has a cool logo",
        "To make high scores feel more special",
        "Because SQL databases needed a break",
        "To provide fast in-memory sorting and ranking"
      ],
      correctAnswer: "To provide fast in-memory sorting and ranking",
      explanation: "Redis provides efficient in-memory data structures and operations perfect for real-time sorting and ranking, essential for leaderboard systems."
    },
    {
      id: 9,
      question: "When designing WhatsApp, why use WebSockets?",
      answers: [
        "To keep network engineers busy",
        "To maintain persistent bi-directional connections",
        "Because HTTP was feeling lonely",
        "To make message bubbles appear faster"
      ],
      correctAnswer: "To maintain persistent bi-directional connections",
      explanation: "WebSockets provide efficient real-time communication by maintaining a persistent connection between client and server, ideal for chat applications."
    },
    {
      id: 10,
      question: "Why use Content Delivery Networks (CDNs) for static assets in global applications?",
      answers: [
        "To keep network cables organized",
        "To reduce latency by serving content from edge locations",
        "Because storing everything in one place is boring",
        "To make the cloud more distributed"
      ],
      correctAnswer: "To reduce latency by serving content from edge locations",
      explanation: "CDNs cache content at edge locations worldwide, reducing latency by serving users from the nearest geographical point and reducing load on origin servers."
    },
    {
      id: 11,
      question: "When designing Netflix's video streaming system, why implement adaptive bitrate streaming?",
      answers: [
        "To make buffering circles more entertaining",
        "Because one video quality wasn't enough",
        "To optimize video quality based on network conditions",
        "To keep network engineers guessing"
      ],
      correctAnswer: "To optimize video quality based on network conditions",
      explanation: "Adaptive bitrate streaming dynamically adjusts video quality based on network conditions and device capabilities, ensuring smooth playback while maximizing quality for available bandwidth."
    },
    {
      id: 12,
      question: "Why use event sourcing in a banking transaction system?",
      answers: [
        "To make auditors work harder",
        "Because CRUD operations were too simple",
        "To maintain a complete audit trail and enable system reconstruction",
        "To store more data"
      ],
      correctAnswer: "To maintain a complete audit trail and enable system reconstruction",
      explanation: "Event sourcing stores all state changes as a sequence of events, providing perfect audit trails, enabling system state reconstruction, and ensuring compliance with financial regulations."
    },
    {
      id: 13,
      question: "When designing Uber's dispatch system, why use a quadtree for geospatial indexing?",
      answers: [
        "Because regular trees weren't fancy enough",
        "To efficiently query locations in geographic regions",
        "To make the system look more complex",
        "Because linear search was too obvious"
      ],
      correctAnswer: "To efficiently query locations in geographic regions",
      explanation: "Quadtrees divide space into hierarchical quadrants, enabling efficient querying of nearby drivers and reducing computational complexity from O(n) to O(log n) for spatial searches."
    },
    {
      id: 14,
      question: "Why implement Circuit Breakers in microservices architecture?",
      answers: [
        "To save electricity",
        "Because continuous operation is overrated",
        "To prevent cascade failures and enable graceful degradation",
        "To make system diagrams more interesting"
      ],
      correctAnswer: "To prevent cascade failures and enable graceful degradation",
      explanation: "Circuit breakers prevent system-wide failures by detecting service issues, stopping cascading failures, and allowing graceful degradation by failing fast and providing fallback mechanisms."
    },
    {
      id: 15,
      question: "When designing Stripe's payment system, why use idempotency keys?",
      answers: [
        "To make transactions more unique",
        "Because duplicate payments are exciting",
        "To prevent duplicate processing of requests",
        "To generate more API keys"
      ],
      correctAnswer: "To prevent duplicate processing of requests",
      explanation: "Idempotency keys ensure that repeated API requests (due to network issues or retries) don't result in multiple transactions, critical for preventing duplicate payments and maintaining data consistency."
    },
    {
      id: 16,
      question: "Why use Blue-Green deployment in large-scale applications?",
      answers: [
        "Because those colors look nice together",
        "To enable zero-downtime deployments and quick rollbacks",
        "To make deployment more colorful",
        "Because single-environment deployment was too simple"
      ],
      correctAnswer: "To enable zero-downtime deployments and quick rollbacks",
      explanation: "Blue-Green deployment maintains two identical environments, enabling zero-downtime releases, instant rollbacks, and thorough testing of new versions before switching traffic."
    },
    {
      id: 17,
      question: "When designing Discord's real-time communication system, why use sharding?",
      answers: [
        "To make the database feel special",
        "Because monolithic databases are outdated",
        "To horizontally partition data and distribute load",
        "To create more server instances"
      ],
      correctAnswer: "To horizontally partition data and distribute load",
      explanation: "Sharding distributes millions of concurrent connections across multiple servers, enabling Discord to handle massive scale while maintaining real-time performance and reducing load on individual servers."
    },
    {
      id: 18,
      question: "Why use Bloom filters in large-scale caching systems?",
      answers: [
        "Because regular filters were too basic",
        "To add more data structures",
        "To quickly check if data might exist before expensive lookups",
        "To make the system more probabilistic"
      ],
      correctAnswer: "To quickly check if data might exist before expensive lookups",
      explanation: "Bloom filters provide space-efficient probabilistic data structures that quickly determine if an item definitely doesn't exist, preventing unnecessary expensive lookups in databases or remote caches."
    },
    {
      id: 19,
      question: "When implementing distributed consensus in systems like etcd, why use algorithms like Raft?",
      answers: [
        "To make system diagrams more arrow-heavy",
        "Because voting is democratic even for servers",
        "To ensure consistency in distributed state across nodes",
        "To create more network traffic"
      ],
      correctAnswer: "To ensure consistency in distributed state across nodes",
      explanation: "Consensus algorithms like Raft enable distributed systems to agree on shared state even in the presence of node failures, ensuring data consistency and system reliability in distributed environments."
    },
    {
      id: 20,
      question: "Why implement database sharding in high-traffic applications?",
      answers: [
        "To keep database administrators busy",
        "Because one database is too lonely",
        "To distribute data across multiple partitions for scalability",
        "To make database diagrams more complex"
      ],
      correctAnswer: "To distribute data across multiple partitions for scalability",
      explanation: "Sharding distributes data across multiple database instances, enabling horizontal scaling, improved throughput, and better performance by reducing the load on any single database node."
    },
    {
      id: 21,
      question: "When implementing a major feature in Spotify's recommendation system, why use feature flags?",
      answers: [
        "To create more boolean variables in the code",
        "To control feature visibility and enable rapid rollbacks",
        "Because flags are more fun than switches",
        "To give developers something to toggle when bored"
      ],
      correctAnswer: "To control feature visibility and enable rapid rollbacks",
      explanation: "Feature flags allow teams to deploy code to production without exposing it to users, enabling controlled rollouts, A/B testing, and immediate rollbacks without redeployment if issues are detected."
    },
    {
      id: 22,
      question: "Why implement CQRS (Command Query Responsibility Segregation) in complex applications?",
      answers: [
        "Because having one model is too mainstream",
        "To make architecture diagrams more impressive",
        "To separate read and write models for optimization",
        "To create more microservices"
      ],
      correctAnswer: "To separate read and write models for optimization",
      explanation: "CQRS separates read and write operations, allowing each to be optimized independently, supporting complex domains, improving scalability, and enabling specialized data models for different use cases."
    },
    {
      id: 23,
      question: "When releasing a new search algorithm at Google, why use canary deployments?",
      answers: [
        "Because birds are good luck for software",
        "To test changes on a subset of users before full rollout",
        "To make deployment pipelines more colorful",
        "Because A/B testing wasn't complicated enough"
      ],
      correctAnswer: "To test changes on a subset of users before full rollout",
      explanation: "Canary deployments release changes to a small percentage of users first, allowing teams to monitor for issues and performance impacts before gradually expanding to the entire user base, minimizing risk."
    },
    {
      id: 24,
      question: "Why implement an API Gateway in a microservices architecture?",
      answers: [
        "To add one more service to the diagram",
        "Because direct client-to-service communication was too simple",
        "To provide a unified entry point with cross-cutting concerns",
        "To make the network topology more interesting"
      ],
      correctAnswer: "To provide a unified entry point with cross-cutting concerns",
      explanation: "API Gateways serve as a single entry point for clients, handling cross-cutting concerns like authentication, rate limiting, and request routing, while shielding clients from the complexity of the underlying microservices architecture."
    },
    {
      id: 25,
      question: "When designing database indexes for an e-commerce platform, why carefully choose indexed columns?",
      answers: [
        "To make database admins feel important",
        "Because indexing everything would be too easy",
        "To optimize query performance while balancing write overhead",
        "To use up more disk space"
      ],
      correctAnswer: "To optimize query performance while balancing write overhead",
      explanation: "Proper index selection dramatically improves read query performance for frequent access patterns, but each index adds overhead to write operations and storage requirements, requiring careful balance based on workload characteristics."
    },
    {
      id: 26,
      question: "Why implement the Saga pattern in a distributed e-commerce transaction flow?",
      answers: [
        "Because transactions should tell a story",
        "To make sequence diagrams longer and more exciting",
        "To maintain data consistency across services without distributed transactions",
        "Because two-phase commit was too reliable"
      ],
      correctAnswer: "To maintain data consistency across services without distributed transactions",
      explanation: "The Saga pattern manages data consistency across microservices by breaking transactions into a sequence of local transactions with compensating actions, enabling eventual consistency without requiring distributed transactions."
    },
    {
      id: 27,
      question: "When designing a real-time analytics platform, why choose an event-driven architecture?",
      answers: [
        "Because events are more exciting than regular data",
        "To make the system diagram look like a pinball machine",
        "To enable loose coupling and real-time data processing",
        "Because synchronous processing was getting boring"
      ],
      correctAnswer: "To enable loose coupling and real-time data processing",
      explanation: "Event-driven architectures allow systems to react to events as they occur, enabling real-time processing, loose coupling between components, better scalability, and more resilient systems that can handle spikes in workload."
    },
    {
      id: 28,
      question: "When a systems design interviewer asks about the CAP theorem, what are they really asking about?",
      answers: [
        "Your fashion choices regarding hats",
        "Your ability to memorize academic papers",
        "Trade-offs between consistency, availability, and partition tolerance",
        "Whether you'll bring caps for the whole team"
      ],
      correctAnswer: "Trade-offs between consistency, availability, and partition tolerance",
      explanation: "The CAP theorem states that distributed systems can only guarantee two of three properties: Consistency (all nodes see the same data), Availability (every request receives a response), and Partition tolerance (system operates despite network failures). Understanding these trade-offs is crucial for designing reliable distributed systems."
    },
    {
      id: 29,
      question: "Why might you choose GraphQL over REST for a mobile application API?",
      answers: [
        "Because graphs are more visually appealing than rest",
        "To minimize network requests and control payload size",
        "Because REST had its turn, it's only fair",
        "To make frontend developers appreciate backend complexity"
      ],
      correctAnswer: "To minimize network requests and control payload size",
      explanation: "GraphQL allows clients to request exactly the data they need in a single query, reducing over-fetching and under-fetching common in REST APIs. This is particularly valuable for mobile applications where bandwidth and battery life are constrained."
    },
    {
      id: 30,
      question: "When designing a data-intensive application, why consider polyglot persistence?",
      answers: [
        "To make your resume look more impressive",
        "Because monoglot persistence was too mainstream",
        "To optimize different data models for different access patterns",
        "To justify subscriptions to multiple database services"
      ],
      correctAnswer: "To optimize different data models for different access patterns",
      explanation: "Polyglot persistence uses different database technologies for different types of data and access patterns. For example, using a document store for unstructured content, a graph database for connected data, and a relational database for transactional data—each optimized for specific use cases."
    }
  ];

  const handleAnswerClick = (questionId, answer) => {
    setSelectedAnswers(prev => ({
      ...prev,
      [questionId]: answer
    }));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="space-y-16">
        {questions.map((q) => (
          <div key={q.id}>
            <h2 className="text-[#00FF9D] text-2xl mb-8">{q.question}</h2>
            
            <div className="space-y-4">
              {q.answers.map((answer, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerClick(q.id, answer)}
                  className={`w-full p-4 text-left rounded ${
                    selectedAnswers[q.id] === answer
                      ? answer === q.correctAnswer
                        ? 'bg-[#1B4D3E] border-[#00FF9D] border text-[#00FF9D]'
                        : 'bg-[#4D1B1B] border-red-500 border text-red-400'
                      : 'bg-secondary hover:bg-tertiary'
                  }`}
                >
                  {answer}
                </button>
              ))}
            </div>
            
            {selectedAnswers[q.id] && (
              <div className="mt-6 p-4 rounded bg-secondary text-foreground/70">
                {selectedAnswers[q.id] === q.correctAnswer ? q.explanation : 'Try again!'}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SystemDesign;