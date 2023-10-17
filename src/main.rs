use std::io::{self, BufRead};

fn main() {
    let stdin = io::stdin();
    let mut lines = stdin.lock().lines().map(|l| l.unwrap()).collect::<Vec<_>>();
    lines.remove(0);
    let input_costs = lines[1].split(' ').collect::<Vec<_>>();

    let mut costs: Vec<i32> = Vec::new();

    for (idx, s) in input_costs.iter().enumerate() {
        let mut costs_copy = lines
            .clone()
            .iter()
            .map(|l| l.parse::<i32>().unwrap())
            .collect::<Vec<_>>();
        costs_copy.remove(idx);
        let mut cost = 0;
        for c in costs_copy.iter() {
            cost += c;
        }
        costs.push(cost);
    }

    for c in costs.iter() {
        println!("{}", c);
    }
}
