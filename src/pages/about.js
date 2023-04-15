import { useRouter } from 'next/router'

export default function Page() {
    const router = useRouter()

    return (
        <div>

            'is this working?'
            <button type="button" onClick={() => router.push('/test')}>
                Click me
            </button>
        </div>
    )
}