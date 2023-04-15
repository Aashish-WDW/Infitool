import whois from "whois-json";

export default async (req, res) => {
    const { domain } = req.query;
    try {
        const results = await whois(domain);
        res.status(200).json(results);
    } catch (error) {
        console.error("Failed to fetch domain whois info", error);
        res.status(500).json({ error: "Failed to fetch domain whois info" });
    }
};
