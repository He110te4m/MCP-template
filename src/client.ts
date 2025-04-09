import { Client } from '@modelcontextprotocol/sdk/client/index'
import { StdioClientTransport } from '@modelcontextprotocol/sdk/client/stdio'
import pkg from '../package.json' assert { type: 'json' }

async function main() {
  const transport = new StdioClientTransport({
    command: 'node',
    args: ['server.js'],
  })

  const client = new Client(
    {
      name: pkg.name,
      version: pkg.version,
    },
  )

  await client.connect(transport)

  // // List prompts
  // const prompts = await client.listPrompts()

  // // Get a prompt
  // const prompt = await client.getPrompt({
  //   name: 'example-prompt',
  //   arguments: {
  //     arg1: 'value',
  //   },
  // })

  // // List resources
  // const resources = await client.listResources()

  // // Read a resource
  // const resource = await client.readResource({
  //   uri: 'file:///example.txt',
  // })

  // // Call a tool
  // const result = await client.callTool({
  //   name: 'example-tool',
  //   arguments: {
  //     arg1: 'value',
  //   },
  // })
}

main()
