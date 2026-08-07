namespace scoreDouble {
    let target = 60
    let started = false
    let handler: (() => void) = null

    /**
     * スコアが2倍になったとき
     */
    //% block="スコアが2倍になったとき"
    export function onScoreDoubled(action: () => void) {
        handler = action

        if (!started) {
            started = true

            game.onUpdate(function () {
                // スコアが目標に達したら実行
                if (info.score() >= target) {
                    if (handler) {
                        handler()
                    }

                    // 次の目標を2倍にする
                    target = target * 2
                }
            })
        }
    }
}
