import LibraryLayout from "@/components/LibraryLayout"
const page = () => {
    return (
        <LibraryLayout>
            <div className="text-center text-muted-foreground">
                <h4 className="text-base mb-3">No lists from others</h4>
                <p>Save someone else's list and it will appear here.</p>
            </div>
        </LibraryLayout>
    )
}

export default page