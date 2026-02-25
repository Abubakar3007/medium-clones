import FollowLayout from "@/components/FollowLayout"
const page = () => {
    return (
        <FollowLayout>
            <div className="text-center">
                <h4 className="text-base mb-4">You haven’t muted anything</h4>
                <p className="text-neutral-500 text-sm">Writers and publications you’ve muted will appear here.</p>
            </div>
        </FollowLayout>
    )
}
export default page